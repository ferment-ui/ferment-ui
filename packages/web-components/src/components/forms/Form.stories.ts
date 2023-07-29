import './input/Input';
import './select/Select';
import './radio-group/RadioGroup';

export default {
  title: 'Forms',
  tags: ['autodocs'],
};

export const Default = {
  render: () => `<form validate>
    <fui-input id='input' name='input' label="Input" inputAttrs='{"required": true, "min": 1, "max": 10, "minlength": 1, "maxlength": 10, "pattern": "[a-z]*", "placeholder": "Placeholder"}'></fui-input>
    <fui-select id='select' name='select' label="Select" options='["Option 1", "Option 2"]'></fui-select>
    <fui-radio-group id='radio-group' name='radio' options='["Option 1", "Option 2"]'></fui-radio-group>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  </form>`
};