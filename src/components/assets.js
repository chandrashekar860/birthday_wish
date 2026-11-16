import inventory from 'virtual:birthday-assets';

const available = new Set(inventory);
export function hasAsset(path) {
  return typeof path === 'string' && available.has(path);
}
