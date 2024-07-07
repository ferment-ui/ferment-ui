import type { Font } from '../vite-env.d';
import { debug } from './debug';

// toggle js
document.documentElement.classList.toggle('no-js', true);

// load fonts
const fonts = JSON.parse(document.documentElement.dataset.fonts ?? '[]').map((font: Font) =>
  new FontFace(font.family, font.source, font.descriptors)
);
Promise.allSettled(fonts.map((font: FontFace) => font.load()
  .then(() => debug(`Loaded ${font.family}`))
  .catch(err => debug(`Failed to load ${font.family}\n${err}`))
)).then(() => {
  document.documentElement.classList.toggle('no-fonts', true);
});