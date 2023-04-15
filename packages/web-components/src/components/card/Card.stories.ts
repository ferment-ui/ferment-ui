import { html } from 'lit';
import './Card';

export default {
  title: 'Card',
  component: 'dc-card',
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: {
        type: 'select',
      },
      options: ['left', 'right', 'top', 'bottom'],
      defaultValue: 'top'
    }
  }
};

export const Default = {
  render: ({layout}: {layout: string}) => html`<dc-card layout="${layout}">
    <img slot="image" src="https://via.placeholder.com/150" alt="Placeholder image" />
    <h2 slot="header">Card header</h2>
    <p>Card body</p>
    <p slot="footer">Card footer</p>
  </dc-card>`
};
