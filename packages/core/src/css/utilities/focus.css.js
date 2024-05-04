import { css } from 'lit';

export default css`
/* @section Focus */
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
  border-color: transparent; /* if it already had a border, keep it to prevent layout shift */
}
/* @endsection */
`;
