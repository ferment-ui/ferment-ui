import { css } from 'lit';

export const variables = css`:root {
  --fui-border-color: var(--fui-gray-300);
  --fui-border-style: solid;
  --fui-border-size: 1px;
  --fui-border: var(--fui-border-size) var(--fui-border-style) var(--fui-border-color);
  --fui-border-radius: calc(1rem / 4);
}`;

export default css`
/* @section Border */
.border-transparent {
  border-color: transparent;
}

.border {
  border: var(--fui-border);
  border-radius: var(--fui-border-radius);
}

.b {
  border: var(--fui-border);
}

.bt {
  border-top: var(--fui-border);
}

.br {
  border-right: var(--fui-border);
}

.bb {
  border-bottom: var(--fui-border);
}

.bl {
  border-left: var(--fui-border);
}
/* @endsection */
`;