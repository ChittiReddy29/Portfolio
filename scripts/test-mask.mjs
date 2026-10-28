import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const width = 1024;
const height = 1024;

// Create an SVG alpha mask with a smooth radial/elliptical shape and bottom gradient fade
// tailored for a clean cinema portrait cutout
const svgMask = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="centerLight" cx="50%" cy="38%" r="48%" fx="50%" fy="36%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
      <stop offset="65%" stop-color="#ffffff" stop-opacity="0.95"/>
      <stop offset="85%" stop-color="#ffffff" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
      <stop offset="78%" stop-color="#ffffff" stop-opacity="1"/>
      <stop offset="98%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <mask id="fadeMask">
      <rect width="${width}" height="${height}" fill="url(#centerLight)"/>
      <rect width="${width}" height="${height}" fill="url(#bottomFade)" style="mix-blend-mode: multiply;"/>
    </mask>
  </defs>
  <rect width="${width}" height="${height}" fill="white" mask="url(#fadeMask)"/>
</svg>
`;

const maskBuffer = await sharp(Buffer.from(svgMask))
  .resize(width, height)
  .extractChannel('alpha')
  .toBuffer();

// Also let's see if we can do background removal or color analysis
console.log('Testing mask generation...');
