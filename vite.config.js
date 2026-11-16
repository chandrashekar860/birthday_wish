import { readdirSync } from 'node:fs';
import { resolve, relative, sep } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// A build-time inventory lets the UI skip requests for intentionally missing files.
function optionalAssets() {
  const publicDir = resolve('public');
  const assetDir = resolve(publicDir, 'assets');
  const id = '\0virtual:birthday-assets';
  return {
    name: 'birthday-optional-assets',
    resolveId(source) { if (source === 'virtual:birthday-assets') return id; },
    load(source) {
      if (source !== id) return;
      const assets = readdirSync(assetDir, { recursive: true, withFileTypes: true })
        .filter((file) => file.isFile() && /\.(?:jpe?g|png|webp|avif|gif|svg|mp3|ogg|wav|m4a)$/i.test(file.name))
        .map((file) => '/' + relative(publicDir, resolve(file.parentPath, file.name)).split(sep).join('/'));
      return `export default ${JSON.stringify(assets)};`;
    },
    configureServer(server) {
      const refresh = (path) => {
        if (!path.startsWith(assetDir + sep)) return;
        const module = server.moduleGraph.getModuleById(id);
        if (module) server.moduleGraph.invalidateModule(module);
        server.ws.send({ type: 'full-reload' });
      };
      server.watcher.on('add', refresh).on('unlink', refresh);
    },
  };
}

export default defineConfig({ plugins: [react(), tailwindcss(), optionalAssets()] });
