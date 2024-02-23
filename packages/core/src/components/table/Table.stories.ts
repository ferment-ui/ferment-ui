import './Table';

export default {
  title: 'Table',
  component: 'fui-table',
  tags: ['autodocs'],
  argTypes: {

  }
};

export const Default = {
  args: {
    data: [{heading: 'Name', cells: ['Alex', 'Romario']}, {heading: 'Age', cells: [35, 30]}],
  },
};
