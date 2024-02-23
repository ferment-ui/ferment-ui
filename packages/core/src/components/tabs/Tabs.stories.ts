import { html } from 'lit';
import { DCTabs } from './Tabs';

const meta = {
  title: 'Tabs',
  component: 'fui-tabs',
  argTypes: {
    cycle: {control: 'boolean'}
  }
};
export default meta;

export const Primary = {
  render: ({cycle}) => html`
    <fui-tabs cycle=${cycle} id='1'>
      <header slot='tab'>Hello</header>
      <div slot='panel'>There</div>

      <header slot='tab'>Another</header>
      <div slot='panel'>One</div>
    </fui-tabs>`
};
