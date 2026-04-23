import { Resvg } from '@resvg/resvg-js';
import opentype from 'opentype.js';
import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const BG = '#246394';
const FG = '#f2f2f2';
const SIZE = 256;
const FONT_SIZE = 220;
const RADIUS = 48;

const font = opentype.loadSync(resolve(root, 'public/calluna-bold.woff'));

// Measure R at origin to find its bounding box, then center it in the canvas
const probe = font.getPath('R', 0, 0, FONT_SIZE);
const { x1, y1, x2, y2 } = probe.getBoundingBox();
const glyphW = x2 - x1;
const glyphH = y2 - y1;
const dx = (SIZE - glyphW) / 2 - x1;
const dy = (SIZE - glyphH) / 2 - y1;

const path = font.getPath('R', dx, dy, FONT_SIZE);
const d = path.toPathData(2);

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}">
  <rect width="${SIZE}" height="${SIZE}" rx="${RADIUS}" ry="${RADIUS}" fill="${BG}"/>
  <path d="${d}" fill="${FG}"/>
</svg>
`;

writeFileSync(resolve(root, 'icon.svg'), svg);
console.log('✓ icon.svg');

const sizes = [16, 32, 48, 128, 256];
for (const s of sizes) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: s },
    shapeRendering: 2,
  });
  const png = resvg.render().asPng();
  writeFileSync(resolve(root, `public/icon${s}.png`), png);
  console.log(`✓ icon${s}.png (${png.length} bytes)`);
}
