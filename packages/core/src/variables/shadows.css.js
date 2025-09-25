import { _var } from '../../utils.js';

export default /*css*/`
:root {
  --bs-color: grey;
  --bs-1: 0 0 0 2px var(${_var('bs-color')});
  --bs-2: 0 0 0 4px var(${_var('bs-color')});
  --bs-3: 0 0 0 8px var(${_var('bs-color')});
  --bs-4: 0 0 0 12px var(${_var('bs-color')});
  --bs-5: 0 0 0 16px var(${_var('bs-color')});
  --bs-6: 0 0 0 20px var(${_var('bs-color')});
}`;