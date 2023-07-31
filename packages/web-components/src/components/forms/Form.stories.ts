import './input/Input';
import './select/Select';
import './radio-group/RadioGroup';
import './address/Address';
import { html } from 'lit';

export default {
  title: 'Forms',
  tags: ['autodocs'],
};

export const Default = {
  render: () => html`
    <form validate="true" onsubmit="console.log([...new FormData(this)]); return false;">
      <fui-input id='input' name='input' value="test" label="Input" inputAttrs='{"required": true, "min": 1, "max": 10, "minlength": 1, "maxlength": 10, "pattern": "[a-z]*", "placeholder": "Placeholder"}'></fui-input>
      <fui-select id='select' name='select' label="Select" options='["Option 1", "Option 2"]'></fui-select>
      <fui-radio-group label="Radio Group Options" id='radio-group' name='radio' options='["Option 1", "Option 2"]'></fui-radio-group>
      <fui-address id='address' name='address' label='Address' country='US'></fui-address>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>`
};
