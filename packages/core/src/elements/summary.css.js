export default /*css*/`
:where(summary) {
  /* prevent block-level elements from creating new line */
  > * {
    display: inline-block;
  }

  /* change the default marker */
  ::marker {
    content: '👍'
  }
}`;