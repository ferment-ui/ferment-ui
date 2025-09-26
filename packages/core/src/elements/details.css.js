export default /*css*/`
:where(details) {
  &::details-content {
    margin-top: 1rem;
    opacity: 0;
    block-size: 0;
    overflow-y: clip;
    transition: content-visibility .5s allow-discrete, opacity .5s, block-size .5s allow-discrete;
    will-change: content-visibility, opacity, block-size;
  }

  &[open]::details-content {
    opacity: 1;
    block-size: auto;
  }
}`;