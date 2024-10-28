import { css } from 'lit';

// TODO: remove important once you fix Zoho's global CSS

export default css`
/* @section List */
ol, ul, ::part(list) {
  --list-margin: clamp(1.5ch, 5vw, 4ch);
  list-style-position: outside !important; 
  margin-inline-start: var(--list-margin, 8ch);
}

ul {
  list-style-type: disc;
}

.ls-none {
  list-style-type: none;
  margin-inline-start: unset;
}

.ls-none:not([role='list'])::before {
  content: 'MISSING role="list"';
  color: red;
  border: 1px solid red;
}
/* @endsection */
`;