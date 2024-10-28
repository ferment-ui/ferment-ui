import { css, unsafeCSS } from 'lit';
import { states } from '../mixins/states.css.js';

const variables = css`
--swatch-gray-1: #6c757d;
--swatch-gray-2: #495057;
--swatch-gray-3: #343a40;
--swatch-gray-4: #212529;

--swatch-green-1: #28a745;
--swatch-green-2: #218838;
--swatch-green-3: #1e7e34;
--swatch-green-4: #155724;

--swatch-blue-1: #007bff;
--swatch-blue-2: #0056b3;
--swatch-blue-3: #004d9b;
--swatch-blue-4: #003366;

--swatch-yellow-1: #ffc107;
--swatch-yellow-2: #e0a800;
--swatch-yellow-3: #d39e00;
--swatch-yellow-4: #856404;

--swatch-red-1: #dc3545;
--swatch-red-2: #c82333;
--swatch-red-3: #bd2130;
--swatch-red-4: #721c24;
`;

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
  background-color: var(--fui-theme-${t}-color);
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

export default unsafeCSS(`
/* @section Color */
${theme('primary')}
${theme('accent')}
${theme('complement')}
${theme('neutral')}
${theme('success')}
${theme('info')}
${theme('warn')}
${theme('danger')}
/* @endsection */`);