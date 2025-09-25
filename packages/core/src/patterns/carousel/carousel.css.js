export default /*css*/`
.carousel {
  position: relative;

  /* &::before, &::after {
    position: absolute;
    inline-size: 10px;
    block-size: 10px;
    inset-block-start: 50%;
  }

  &::before {
    content: 'prev';
    inset-inline-start: 0;
    transform: translateX(100%);
  }

  &::after {
    content: 'next';
    inset-inline-end: 0;
    transform: translateX(-300%);
  } */

  > ul {
    display: flex;
    overflow: hidden;
    /* overflow-x: auto; */
    /* scroll-behavior: smooth; */
    /* scroll-snap-align: center; */
    will-change: transform; /* We should be nice to the browser - let it know what we're going to animate. */
    animation: scrolling 10s linear infinite;

    &:focus {
      outline: 2px solid currentColor;
    }

    /* TODO: errors? */
    /* &:not([tabindex])::before {
      content: 'MUST HAVE TAB INDEX FOR KEYBOARD NAVIGATION';
      display: block;
      inline-size: 1em;
    } */
  }

  li {
    display: inline-block;
    flex: 1 0 auto;
    white-space: nowrap;
    /* scroll-snap-type: x mandatory; */
  }

  .carousel__pagination {
    display: flex;
    gap: 1em;
    justify-content: center;
  }
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
`;