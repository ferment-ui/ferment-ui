import { html } from 'lit';
import { Meta } from '@storybook/web-components';
import { spread } from '@open-wc/lit-helpers';

export default {
  title: 'Button',
  tags: ['autodocs']
} as Meta;

const Template = (props) => html`<button class='button ${spread(props)}'>Hello</button>`;

export const Default = Template.bind({
  variant: 'default'
});