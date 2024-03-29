import { css } from 'lit';

export default css`
.border-transparent {
  border-color: transparent;
}

.border {
  border: var(--fui-border-width) solid var(--fui-color-border);
  border-radius: var(--fui-border-radius);
}

.b {
  border: var(--fui-border-width) solid var(--fui-color-border);
}

.bt {
  border-top: var(--fui-border-width) solid var(--fui-color-border);
}

.br {
  border-right: var(--fui-border-width) solid var(--fui-color-border);
}

.bb {
  border-bottom: var(--fui-border-width) solid var(--fui-color-border);
}

.bl {
  border-left: var(--fui-border-width) solid var(--fui-color-border);
}
`;