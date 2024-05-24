import { css } from 'lit';

export default css`
:root {
  --fui-banner-height: auto;
}

[role="banner"] {
  display: flex;
}

.viewport-no-banner {
  width: 100vw;
  height: calc(100vh - var(--fui-banner-height));
}

.h-viewport-no-banner {
  height: calc(100vh - var(--fui-banner-height));
}

.pt-banner {
  padding-top: var(--fui-banner-height);
}

.pb-banner {
  padding-bottom: var(--fui-banner-height);
}

.mt-banner {
  margin-top: var(--fui-banner-height);
}

.mb-banner {
  margin-bottom: var(--fui-banner-height);
}

`;

