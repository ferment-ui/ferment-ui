import { css } from 'lit';

export default css`
.viewport {
  width: 100vw;
  height: 100vh;
}

.h-svh {
  height: 100svh;
}

.h-100 {
  height: 100%;
}

.minh-vh {
  min-height: 100vh;
}

.minh-100 {
  min-height: 100%;
}

.maxh-svh {
  max-height: 100svh;
}

.maxh-100 {
  max-height: 100%;
}

.w-viewport {
  width: 100vw;
}

.w-100 {
  width: 100%;
}

.w-fit-content {
  width: fit-content;
}

.w-page {
  width: var(--fui-page-width);
}`;