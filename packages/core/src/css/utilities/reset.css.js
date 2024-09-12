import { css } from 'lit';

export default css`
/* @section Reset */
*, *:before, *:after, :host {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
  max-block-size: 100%;
  object-fit: contain;
}

a {
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

textarea:not([rows]) {
  min-height: 10em;
}

:target {
  scroll-margin-block: 5ex;
}
/* @endsection */
`;