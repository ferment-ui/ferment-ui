// NOTE: this setup requires replacing the `.intro` class
// with the `.introed` class. This is usually done with an
// `IntersectionObserver` or similar mechanism to detect when
// the element is in view.

export default /*css*/`
:where(:root:not(.no-js)) {
  .intro, [class^="intro-"], [class*=" intro-"] {
    will-change: transform, opacity;
    opacity: var(--intro-opacity, 1);
    transform-origin: var(--intro-origin, center);
    transform: 
      perspective(var(--intro-perspective, 0))
      rotateX(var(--intro-rotate-x, 0))
      rotateY(var(--intro-rotate-y, 0))
      rotateZ(var(--intro-rotate-z, 0))
      scaleX(var(--intro-scale-x, 1))
      scaleY(var(--intro-scale-y, 1))
      scaleZ(var(--intro-scale-z, 1))
      skewX(var(--intro-skew-x, 0))
      skewY(var(--intro-skew-y, 0))
      translateX(var(--intro-translate-x, 0))
      translateY(var(--intro-translate-y, 0))
      translateZ(var(--intro-translate-z, 0));
  }

  .introed {
    transition-delay: var(--intro-delay, 0s);
    transition-duration: var(--intro-duration, var(--animation-duration));
    transition-property: var(--intro-property, all);
    transition-timing-function: var(--intro-timing-function, var(--animation-timing-function));
  }

  .intro-fade-in {
    --intro-opacity: 0;
  }

  .intro-left {
    --intro-translate-x: 50%;
  }

  .intro-right {
    --intro-translate-x: -50%;
  }

  .intro-top {
    --intro-translate-y: 50%;
  }

  .intro-bottom {
    --intro-translate-y: -50%;
  }

  .intro-rotate {
    --intro-rotate-z: 15deg;
  }

  .intro-scale-up {
    --intro-scale-x: 0;
    --intro-scale-y: 0;
  }

  .intro-scale-right {
    --intro-scale-x: 0;
    --intro-scale-y: 0;
    --intro-translate-x: -50%;
    --intro-translate-y: -50%;
    --intro-origin: left;
  }
}`;