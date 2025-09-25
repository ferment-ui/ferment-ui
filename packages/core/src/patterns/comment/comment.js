export default ({ tag = 'span', children }) => /*html*/`<${tag} class="comment">
  ${children}
</${tag}>`;