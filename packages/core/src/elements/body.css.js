import { _var } from '../utils.js';

export default /*css*/`
:where(body) {
  container-type: inline-size;
  container-name: body;
  min-block-size: 100%;
  font-size: var(${_var('copy-fs')});
  font-family: var(${_var('copy-ff')});
  font-weight: var(${_var('copy-fw')});
  line-height: var(${_var('copy-lh')});
  text-transform: var(${_var('copy-tt')});
  text-decoration: var(${_var('copy-td')});
  letter-spacing: var(${_var('copy-ls')});
}`;