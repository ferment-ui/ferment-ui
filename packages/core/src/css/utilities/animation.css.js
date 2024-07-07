import { css } from 'lit';

export default css`
/* @section Animation */
.t-default {
  transition: var(--fui-animation-default-speed) var(--fui-animation-default-timing-function);
}

.intro {
  opacity: 1;
  transform: none;
  transition-duration: var(--fui-animation-default-speed);
  transition-property: all
  transition-timing-function: var(--fui-animation-default-timing-function);
}
/* @endsection */
`;