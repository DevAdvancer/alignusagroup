// Generate a white-on-transparent version of the wordmark for use on dark surfaces.
// Algorithm: per pixel, alpha = 255 - max(R,G,B). Bright/white pixels become transparent;
// dark pixels become opaque white. Anti-aliased edges are preserved smoothly.
import sharp from 'sharp';
import path from 'node:path';

const SRC = path.resolve('public/logo/wordmark.png');
const OUT_NAV_HD = path.resolve('public/logo/wordmark-white.png');

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const out = Buffer.alloc(info.width * info.height * 4);
for (let i = 0, j = 0; i < data.length; i += info.channels, j += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  // Brightness from 0 (black) to 255 (white)
  const brightness = Math.max(r, g, b);
  // Invert to alpha — dark pixels become opaque white, white pixels become transparent
  out[j] = 255;
  out[j + 1] = 255;
  out[j + 2] = 255;
  out[j + 3] = 255 - brightness;
}

await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(OUT_NAV_HD);

console.log(`-> ${OUT_NAV_HD} (${info.width}x${info.height}, white-on-transparent)`);
