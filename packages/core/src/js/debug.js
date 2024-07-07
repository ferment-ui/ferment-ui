export function debug(...args) {
  if (localStorage.getItem('fui-debug') != null) {
    console.debug(...args);
  }
}