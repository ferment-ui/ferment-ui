import { css } from 'lit';

export default css`
:root {
  --fui-card-border: var(--fui-border);
  --fui-card-border-radius: var(--fui-border-radius);
  --fui-card-box-shadow: var(--fui-box-shadow-0);
  --fui-card-padding: calc(var(--fui-spacing-base) * 10) calc(var(--fui-spacing-base) * 10);
}

.card, fui-card {
  display: grid;
  border-radius: var(--fui-card-border-radius);
  border: var(--fui-card-border);
  box-shadow: var(--fui-card-box-shadow);
  padding: var(--fui-card-padding);
}
`;