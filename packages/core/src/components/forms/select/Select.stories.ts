import { html } from 'lit-html';
import './Select';

export default {
  title: 'Select',
  component: 'fui-select',
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
    options: {
        control: 'object',
        defaultValue: [],
        description: 'The options of the select element',
    }
  }
};

export const Default = {
  args: {
    id: 'select',
    label: 'Select',
    options: [
      "Option 1"
    ]
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
