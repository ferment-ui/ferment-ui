export default /*css*/`
:where(label) {
  &:has(+ [required])::after {
    content: ' *';
  }

  &:has(+ :user-invalid) {
    color: red;
  }
}`;