import { writeFile } from 'fs/promises';
import { buttonStyles } from '../src/components/button/button.css.js';
import { variables } from '../src/css/variables.css.js';

const globalCSS = [
  variables,
  buttonStyles,
];

(async () => {
  const text = globalCSS.map(css => css.cssText).join('\n');
  await writeFile('public/ferment-ui.css', text, {encoding: 'utf-8'});
})();