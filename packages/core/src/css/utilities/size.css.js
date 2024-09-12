import { css } from 'lit';

export default css`
.viewport {
  width: 100vw;
  height: 100vh;
}

.h-viewport {
  height: 100vh;
}

.h-100 {
  height: 100%;
}

.minh-viewport {
  min-height: 100vh;
}

.minh-100 {
  min-height: 100%;
}

.maxh-viewport {
  max-height: 100vh;
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