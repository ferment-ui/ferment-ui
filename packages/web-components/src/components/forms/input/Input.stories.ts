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
    }
  }
};
