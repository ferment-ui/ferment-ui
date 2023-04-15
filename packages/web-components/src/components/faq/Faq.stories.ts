import './Faq';

export default {
  title: 'Faq',
  component: 'dc-faq',
  tags: ['autodocs'],
  argTypes: {
    faqs: {
      control: 'text',
    },
  }
};

export const Default = {
  args: {
    faqs: [
      {
        title: 'What is the difference between a component and a pattern?',
        content: 'A component is a single, reusable piece of UI. A pattern is a collection of components that work together to solve a specific problem.',
        tags: ['component', 'pattern']
      },
      {
        title: 'What is the difference between a component and a template?',
        content: 'A component is a single, reusable piece of UI. A template is a collection of components that work together to solve a specific problem.',
        tags: ['component', 'template']
      }
    ]
  },
};
