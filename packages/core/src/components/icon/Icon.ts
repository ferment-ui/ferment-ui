import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { choose } from 'lit/directives/choose.js';

@customElement('fui-icon')
export class FUIIcon extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-flex;
        pointer-events: none;
        width: 1em;
        height: 1em;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      }
    `
  ];

  @property({ type: String }) label: string = '';
  @property({ type: Number }) tabIndex = -1;

  // TODO: app props for icon for font based, use for svg, and src for img
  @property({ type: String }) data: string = '';
  @property({ type: String}) use: string = '';
  @property({ type: String}) src: string = '';
  @property({ type: String }) name: string = '';

  render() {
    const method = this.use ? 'use' : this.src ? 'img' : this.name ? 'i' : 'object';
    return html`${choose(method, [
      ['object', () => html`<object tabindex='${this.tabIndex}' type='image/svg+xml' data='${this.data}' aria-label='${this.label}'></object>`],
      ['use', () => html`<svg tabindex='${this.tabIndex}' aria-label='${this.label}'><use href='${this.use}'></use></svg>`],
      ['img', () => html`<img tabindex='${this.tabIndex}' src='${this.src}' alt='${this.label}' />`],
      ['i', () => html`<i tabindex='${this.tabIndex}' class='${this.name}' aria-label='${this.label}'></i>`]
    ])}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-icon': FUIIcon;
  }
}