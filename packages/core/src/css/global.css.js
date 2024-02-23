import { css } from 'lit';

export const globalStyles = css`
*, :host {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
  list-position: inside;
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