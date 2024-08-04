import { css } from 'lit';

export default css`
/* @section Animation */
.t-default {
  transition: var(--fui-animation-default-speed) var(--fui-animation-default-timing-function);
}

html:not(.no-js) .intro {
  opacity: var(--opacity, var(--fui-animation-default-opacity, 0));
  transform: 
    perspective(var(--perspective, var(--fui-animation-default-perspective, 0)))
    rotateX(var(--rotate-x, var(--fui-animation-default-rotate-x, 0)))
    rotateY(var(--rotate-y, var(--fui-animation-default-rotate-y, 0)))
    rotateZ(var(--rotate-z, var(--fui-animation-default-rotate-z, 0)))
    scaleX(var(--scale-x, var(--fui-animation-default-scale-x, 1)))
    scaleY(var(--scale-y, var(--fui-animation-default-scale-y, 1)))
    scaleZ(var(--scale-z, var(--fui-animation-default-scale-z, 1)))
    skewX(var(--skew-x, var(--fui-animation-default-skew-x, 0)))
    skewY(var(--skew-y, var(--fui-animation-default-skew-y, 0)))
    translateX(var(--translate-x, var(--fui-animation-default-translate-x, 0)))
    translateY(var(--translate-y, var(--fui-animation-default-translate-y, 0)))
    translateZ(var(--translate-z, var(--fui-animation-default-translate-z, 0)));
  will-change: transform, opacity;
}

html:not(.no-js) .introed {
  opacity: 1;
  transform: unset;
  transition-delay: var(--delay, 0s);
  transition-duration: var(--duration, var(--fui-animation-default-speed));
  transition-property: var(--property, all);
  transition-timing-function: var(--timing-function, var(--fui-animation-default-timing-function));
}

/* @endsection */
`;

export function stagger(elements, step = 1, min = 0, max = 0) {
  elements.forEach((element, index) => {
    const delay = Math.min(max, Math.max(min, index * step));
    element.style.setProperty('--delay', `${delay}ms`);
  });
}