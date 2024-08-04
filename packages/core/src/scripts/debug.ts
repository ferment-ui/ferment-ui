export function debug(...msgs: any[]) {
  if (localStorage.getItem('fui-debug') != null) {
    console.debug(...msgs);
  }
}