import { css } from 'lit';

export default css`
:root {
  --fui-card-radius: var(--fui-button-radius);
  --fui-card-padding: calc(var(--fui-spacing-base) * 10) calc(var(--fui-spacing-base) * 10);
}

.card {
  flex: 1;
  display: grid;
  border-radius: var(--fui-card-radius);
  border: var(--fui-border);
  box-shadow: var(--fui-box-shadow-1);
  overflow: hidden;
  padding: var(--fui-card-padding);
}
`;