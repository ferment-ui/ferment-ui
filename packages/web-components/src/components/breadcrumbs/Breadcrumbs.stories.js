import { html } from 'lit';
import { DCBreadcrumbs } from './Breadcrumbs';

const meta = {
  title: 'Breadcrumbs',
  component: 'dc-breadcrumbs',
  tags: ['autodocs'],
  argTypes: {
    links: {
        control: 'object',
        defaultValue: [],
        description: 'Array of `Link` objects to display as breadcrumbs',
    }
  }
};
export default meta;

const links = [
  {href: 'https://www.google.com', text: 'Google'},
  {href: 'https://www.amazon.com', text: 'Amazon'},
]

export const Default = {
  args: {
    links
  }
};
