import { html } from 'lit-html';
import './Input';

export default {
  title: 'Input',
  component: 'fui-input',
  tags: ['autodocs'],
  argTypes: {
    name: {
        control: 'text',
        defaultValue: '',
        description: 'The name of the select element',
    },
    label: {
        control: 'text',
        defaultValue: '',
        description: 'The label of the select element',
    },
    inputAttrs: {
        control: 'object',
        defaultValue: {},
        description: 'The attributes of the select element',
    }
  }
};

export const Default = {
  args: {
    id: 'input',
    label: 'Input',
    inputAttrs: {
      required: true,
      min: 1,
      max: 10,
      minlength: 1,
      maxlength: 10,
      pattern: '[a-z]*',
      placeholder: 'Placeholder',
    }
  }
};

// NOTE: slots don't work because option tags must have a select tag as a direct parent

// export const Slot = {
//   render: ({id, name, label}) => html`<fui-select .id=${id} .name=${name} .label=${label}><option>Hello</option></fui-select>`,
//   args: {
//     name: 'select',
//     label: 'Select',
//     id: 'select'
//   }
// };
