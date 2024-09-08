import { html } from 'lit';
import './Banner.js';

export default {
  title: 'Banner',
  component: 'fui-banner',
  tags: ['autodocs'],
  argTypes: {
    
  }
};

export const Default = {
  render: () => html`<fui-banner>
    <a href='#' slot='left'><h1>Logo</h1></a>
    <nav slot='right'>
      <a href='#'>About</a>
    </nav>
  </fui-banner>`
};
