export default /*css*/`
:where(p) {
  font-family: var(--p-font-family, var(--ff-body, Arial, sans-serif));
  font-size: var(--p-font-size, var(--fs-body, 1rem));
  font-weight: var(--p-font-weight, var(--fw-body, normal));
  line-height: var(--p-line-height, var(--lh-body, 1.5));
}`;