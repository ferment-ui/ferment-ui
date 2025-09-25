import { _var } from '../utils.js';

export default /*css*/`
:where(ul) {
  list-style-type: none;
  list-style-position: inside;

  &[role="list"] {
    list-style-type: var(${_var('list-style-type')});
  }
}`;