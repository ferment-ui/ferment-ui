import { html } from 'lit';
import { Meta } from '@storybook/web-components';
import { spread } from '@open-wc/lit-helpers';
import './Wysiwyg.js';

export default {
  title: 'Wysiwyg',
  component: 'fui-wysiwyg',
  tags: ['autodocs']
} as Meta;

const Template = (props) => html`<fui-wysiwyg ${spread(props)}></fui-wysiwyg>`;

export const Default = Template.bind({});