import './Breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: 'fui-breadcrumbs',
  tags: ['autodocs'],
  argTypes: {
    links: {
        control: 'object',
        defaultValue: [],
        description: 'Array of `Link` objects to display as breadcrumbs',
    }
  }
};

export const Default = {
  args: {
    links: [
      {href: 'https://www.google.com', text: 'Google'},
      {href: 'https://www.amazon.com', text: 'Amazon'},
    ]
  }
};
