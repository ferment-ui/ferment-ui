import { css } from 'lit';

export default css`
/* @section Global */
*, :host {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
  max-inline-size: 100%;
  max-block-size: 100%;
  object-fit: contain;
}
/* @endsection */
`;