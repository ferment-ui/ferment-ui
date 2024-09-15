import { css } from 'lit';

export default css`
/* @section Reset */
:root {
  box-sizing: border-box;
}

*, *:before, *:after, :host {
  padding: 0;
  margin: 0;
  box-sizing: inherit;

  
}

@media (prefers-reduced-motion: reduce) {
  *, *:before, *:after, :host {
    transition-duration: 0s !important;
  }
}

:root {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

img,
picture,
video,
iframe {
  max-inline-size: 100%;
  block-size: auto;
  object-fit: cover;
}

a {
  color: inherit;
  text-decoration: inherit;

  &[disabled] {
    pointer-events: none;
  }

  &:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
    display: inline-block;
  }
}

:visited {
  color: currentColor;
}

body {
  overflow-x: hidden;
  min-height: 100svh;
  line-height: 1.5;
  text-wrap: pretty;
}

h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
  text-wrap: balance;
}

input, button,
textarea, select {
  font-family: inherit;
  font-size: inherit;
}

:target {
  scroll-margin-block: 5ex;
}
/* @endsection */
`;