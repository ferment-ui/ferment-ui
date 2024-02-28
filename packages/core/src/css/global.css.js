import { css } from 'lit';

export const globalStyles = css`
*, :host {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none inside;
}

a[disabled] {
  pointer-events: none;
}

img,
picture,
video,
iframe {
  max-inline-size: 100%; /* logical property for "width", image cannot go larger than it's size */
  max-block-size: 100%; /* logical property for "height" */;
  object-fit: contain;
}
`;