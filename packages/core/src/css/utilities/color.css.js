import { css, unsafeCSS } from 'lit';
import { states } from '../mixins/states.css.js';

function theme(t) {
  return unsafeCSS(`.${t} {
  color: var(--fui-theme-${t}-color);
  background-color: var(--fui-theme-${t}-background-color);
}

.${t} :visited {
  color: var(--fui-theme-${t}-color-visited);
}

${states(t, `  color: var(--fui-theme-${t}-color);
  background-color: var(--fui-theme-${t}-background-color);`)}

.${t}-inverse {
  color: var(--fui-theme-${t}-background-color);
}

.${t}-inverse :visited {
  color: var(--fui-theme-${t}-color-visited);
}

${states(`${t}-inverse`, `  color: var(--fui-theme-${t}-background-color);
  background-color: var(--fui-theme-${t}-color);`)}

.c-${t}-color {
  color: var(--fui-theme-${t}-color);
}

${states(`c-${t}-color`, `  color: var(--fui-theme-${t}-color);`)}

.c-${t}-background-color {
  color: var(--fui-theme-${t}-background-color);
}

${states(`c-${t}-background-color`, `  color: var(--fui-theme-${t}-background-color);`)}

.bg-${t}-color {
  background-color: var(--fui-theme-${t}-color);
}

${states(`bg-${t}-color`, `  background-color: var(--fui-theme-${t}-color);`)}

.bg-${t}-background-color {
  background-color: var(--fui-theme-${t}-background-color);
}

${states(`bg-${t}-background-color`, `  background-color: var(--fui-theme-${t}-background-color);`)}`);
}

export default unsafeCSS(`${theme('primary')}
${theme('accent')}
${theme('complement')}
${theme('neutral')}
${theme('success')}
${theme('info')}
${theme('warn')}
${theme('danger')}`);