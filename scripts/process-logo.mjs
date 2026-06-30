import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const PROJECT = path.resolve(process.cwd());
const SRC = path.join(PROJECT, 'public/assets/align-logo.png');
const OUT_DIR = path.join(PROJECT, 'public/logo');
const APP_DIR = path.join(PROJECT, 'app');

await mkdir(OUT_DIR, { recursive: true });

const meta = await sharp(SRC).metadata();
console.log(`Source: ${meta.width}x${meta.height}, format ${meta.format}`);

// Trim whitespace borders to get tight content bounds.
const trimmedBuf = await sharp(SRC)
  .flatten({ background: '#ffffff' })
  .trim({ threshold: 12 })
  .toBuffer();
const tm = await sharp(trimmedBuf).metadata();
console.log(`Trimmed: ${tm.width}x${tm.height}`);

// The trimmed image contains the ALIGN wordmark on top and the
// tagline ("ADVANCE LEADERSHIP AND INTEGRATED GROUP OF NETWORKING (OPC) PVT. LTD.")
// on the bottom. The tagline is roughly the bottom ~22% of the trimmed image.
const wordmarkHeight = Math.round(tm.height * 0.78);

// Wordmark only (no tagline), full width
await sharp(trimmedBuf)
  .extract({ left: 0, top: 0, width: tm.width, height: wordmarkHeight })
  .resize({ width: 1600, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile(path.join(OUT_DIR, 'wordmark.png'));
console.log('-> public/logo/wordmark.png');

// Icon (the stylized "A" mark only). Look at the wordmark's leftmost ~21%.
const iconRegionW = Math.round(tm.width * 0.21);
const iconRegionH = wordmarkHeight;
const iconBuf = await sharp(trimmedBuf)
  .extract({ left: 0, top: 0, width: iconRegionW, height: iconRegionH })
  .toBuffer();

// Pad to square with white background, then make the white transparent later.
const iconSquareSide = Math.max(iconRegionW, iconRegionH);
await sharp(iconBuf)
  .resize({
    width: iconSquareSide,
    height: iconSquareSide,
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .resize(512, 512)
  .png({ compressionLevel: 9 })
  .toFile(path.join(OUT_DIR, 'icon.png'));
console.log('-> public/logo/icon.png (512x512)');

// Apple-touch icon: same icon, 180x180.
await sharp(path.join(OUT_DIR, 'icon.png'))
  .resize(180, 180)
  .png({ compressionLevel: 9 })
  .toFile(path.join(APP_DIR, 'apple-icon.png'));
console.log('-> app/apple-icon.png (180x180)');

// Favicon: same icon, 64x64, replaces app/icon.svg.
await sharp(path.join(OUT_DIR, 'icon.png'))
  .resize(64, 64)
  .png({ compressionLevel: 9 })
  .toFile(path.join(APP_DIR, 'icon.png'));
console.log('-> app/icon.png (64x64)');

// Full logo (wordmark + tagline), scaled for general use.
await sharp(trimmedBuf)
  .resize({ width: 2000, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile(path.join(OUT_DIR, 'full.png'));
console.log('-> public/logo/full.png');

console.log('Done.');
