import { html } from 'lit';
import './Faq';

export default {
  title: 'Faq',
  component: 'fui-faq',
  tags: ['autodocs'],
  argTypes: {
    faqs: {control: 'text'},
    selectedTag: {control: 'text'},
    selectedQuestions: {control: 'array', defaultValue: []},
    allTagsTemplate: {control: 'text'}
  }
};

export const Default = {
  // render: ({args}) => html`<fui-faq .faqs=${args.faqs}, .selectedQuestions=${args.selectedQuestions} .selectedTag=${args.selectedTag} .allTagsTemplate=${args.allTagsTemplate}></fui-faq>`,
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
