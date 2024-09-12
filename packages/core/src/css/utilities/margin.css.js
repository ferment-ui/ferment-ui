import { css } from 'lit';

export default css`
.m {
  margin: var(--fui-spacing-y-min) var(--fui-spacing-x-min);
}

.mt {
  margin-top: var(--fui-spacing-y-min);
}

.mr {
  margin-right: var(--fui-spacing-x-min);
}

.mb {
  margin-bottom: var(--fui-spacing-y-min);
}

.ml {
  margin-left: var(--fui-spacing-x-min);
}

.mx {
  margin-left: var(--fui-spacing-x-min);
  margin-right: var(--fui-spacing-x-min);
}

.my {
  margin-top: var(--fui-spacing-y-min);
  margin-bottom: var(--fui-spacing-y-min);
}

.m-0 {
  margin: 0;
}

.mt-0 {
  margin-top: 0;
}

.mr-0 {
  margin-right: 0;
}

.mb-0 {
  margin-bottom: 0;
}

.ml-0 {
  margin-left: 0;
}

.m-responsive {
  margin: var(--fui-spacing-responsive-y) var(--fui-spacing-responsive-x);
}

.mt-responsive {
  margin-top: var(--fui-spacing-responsive-y);
}

.mr-responsive {
  margin-right: var(--fui-spacing-responsive-x);
}

.mb-responsive {
  margin-bottom: var(--fui-spacing-responsive-y);
}

.ml-responsive {
  margin-left: var(--fui-spacing-responsive-x);
}

.mx-responsive {
  margin-left: var(--fui-spacing-responsive-x);
  margin-right: var(--fui-spacing-responsive-x);
}

.my-responsive {
  margin-top: var(--fui-spacing-responsive-y);
  margin-bottom: var(--fui-spacing-responsive-y);
}

.ml-auto {
  margin-left: auto;
}

.mr-auto {
  margin-right: auto;
}

.mt-text {
  margin-top: var(--fui-spacing-text);
}

.mb-text {
  margin-bottom: var(--fui-spacing-text);
}
`;