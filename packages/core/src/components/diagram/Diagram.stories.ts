import { html } from 'lit';
import { Meta } from '@storybook/web-components';
import { spread } from '@open-wc/lit-helpers';
import './Diagram.js';

export default {
  title: 'Diagram',
  component: 'fui-diagram',
  tags: ['autodocs']
} as Meta;

const Template = (props) => html`<fui-diagram ${spread(props)}></fui-diagram>`;

export const Default = Template.bind({});