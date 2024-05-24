import { css } from 'lit';

export default css`
:root {
  --fui-button-border: var(--fui-border);
  --fui-button-border-radius: var(--fui-border-radius);
  --fui-button-padding: calc(var(--fui-spacing-base) * 1) calc(var(--fui-spacing-base) * 2);
}

.button {
  border: var(--fui-button-border);
  border-radius: var(--fui-button-radius);
  background-color: var(--fui-theme-primary-color);
  padding: var(--fui-button-padding);
  font-size: inherit; 
  font-family: inherit;
  min-width: var(--fui-spacing-min-touch-size);
  min-height: var(--fui-spacing-min-touch-size);
  box-shadow: var(--fui-box-shadow-0);
  cursor: pointer;
}
`;