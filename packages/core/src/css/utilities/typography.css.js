import { css } from 'lit';

export default css`
/* @section Typography */
body, p {
  font-family: var(--fui-body-font-family);
  font-size: var(--fui-body-font-size);
  line-height: var(--fui-body-line-height);
  font-weight: var(--fui-body-font-weight);
  font-style: var(--fui-body-font-style);
  font-variant: var(--fui-body-font-variant);
  font-kerning: var(--fui-body-font-kerning);
}

h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
  font-family: var(--fui-heading-font-family);
  line-height: var(--fui-heading-line-height);
}

h1, .h1 {
  font-size: var(--fui-h1-font-size);
  font-weight: 100;
}

h2, .h2 {
  font-size: var(--fui-h2-font-size);
}

h3, .h3 {
  font-size: var(--fui-h3-font-size);
}

h4, .h4 {
  font-size: var(--fui-h4-font-size);
}

h5, .h5 {
  font-size: var(--fui-h5-font-size);
}

h6, .h6 {
  font-size: var(--fui-h6-font-size);
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.fs-smaller {
  font-size: calc(1em / var(--fui-font-size-scale));
}

.fs-medium {
  font-size: 1rem;
}

.fs-larger {
  font-size: calc(1em * var(--fui-font-size-scale));
}

p + p, p + blockquote, p + ul, p + ol, p + h1, p + .h1, p + h2, p + .h2, p + h3, p + .h3, p + h4, p + .h4, p + h5, p + .h5, p + h6, p + .h6, blockquote + p, ul + p, ol + p, ul + ul, ul + ol, ol + ul, ol + ol {
  margin-top: calc(var(--fui-spacing-base) * 12px);
}
/* @endsection */
`;