import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";

// Load logo3.png and get raw pixel data
const input = readFileSync("public/logo3.png");
const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

// The N+leaf icon occupies roughly the left ~30% of the image.
// We determine per-pixel: if a pixel is clearly "green" (leaf) keep it.
// If it is clearly "light cream/beige" (the N letter) keep it too.
// Everything else that is light-ish (the text "NEXON GREEN") → turn black.

const pixels = new Uint8Array(data);

for (let i = 0; i < pixels.length; i += channels) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];
  const a = pixels[i + 3];

  if (a < 30) continue; // fully transparent — skip

  // Keep green pixels (the leaf) unchanged
  // Green: G channel dominant, clearly greener than red and blue
  const isGreen = g > 80 && g > r * 1.4 && g > b * 1.4;
  if (isGreen) continue;

  // Turn everything else black (N shape + text)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  if (brightness > 20) {
    pixels[i] = 0;
    pixels[i + 1] = 0;
    pixels[i + 2] = 0;
  }
}

const output = await sharp(Buffer.from(pixels), {
  raw: { width, height, channels },
}).png().toBuffer();

writeFileSync("public/logo3-dark.png", output);
console.log("Created public/logo3-dark.png");
