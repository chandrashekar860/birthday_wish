# Shinchan’s Secret Birthday Mission

An unofficial, fan-made birthday adventure for Vino (Bubu). The seven scenes take her from an illustrated invitation into a birthday house. She can explore the memory album, love quiz, gift, and cake in any order. Discovering all four unlocks the final letter.

The app is built with React, Vite, Tailwind CSS, Motion, Lucide, and original SVG illustrations. It runs in the browser with no backend, login, API keys, or environment variables. Discoveries are saved to the current browser; audio starts muted and is optional.

## Run it locally

Use Node.js 24 and npm. From this project directory:

```sh
npm install
npm run dev
```

Open the local URL Vite prints. For production checks:

```sh
npm run lint
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`. Preview serves that build locally. Visit [CUSTOMIZATION.md](./CUSTOMIZATION.md) for all personal copy and asset filenames. The project works without any photos, character artwork, or audio.

## Deploy to Vercel

1. Customize the project and test it locally. Put it in a Git repository and import it as a new Vercel project. Set **Root Directory** to the directory containing this README and `package.json`.
2. Use the **Vite** preset, Node.js **24.x**, `npm run build` as the build command, and `dist` as the output directory. The included `vercel.json` sets the preset and output. No environment variables are needed.
3. Set and verify the access controls you want before uploading any private material. An unlisted URL is accessible to anyone who has it unless access protection is enabled. The in-game envelope lock is part of the story; it does not protect text or photos in the deployed files.
4. Deploy from the Vercel dashboard when ready. Check the URL on a phone and in a fresh browser session before sharing it.

The app uses hash-based scene navigation, so it does not need a catch-all server rewrite. See [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite) for the hosting workflow.
