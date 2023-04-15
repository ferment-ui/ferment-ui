import './Tel';

export default {
  title: 'Tel',
  component: 'dc-tel',
  tags: ['autodocs'],
  argTypes: {
    area: {
        control: 'text',
        defaultValue: '',
        description: 'The area code of the telephone number, reversed',
    },
    number: {
        control: 'text',
        defaultValue: '',
        description: 'The telephone number, reversed',
    },
    tel: {
        control: 'boolean',
        defaultValue: true,
        description: 'Whether to render the telephone number as a call link',
    }
  }
};

export const Default = {
  args: {
    area: '123'.split("").reverse().join(""),
    number: '4567890'.split("").reverse().join(""),
    tel: true,
  }
};
