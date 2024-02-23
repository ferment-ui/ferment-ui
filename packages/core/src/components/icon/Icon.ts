import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('fui-icon')
export class FUIIcon extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        pointer-events: none;
        width: var(--S-icon, 1rem);
        height: var(--S-icon, 1rem);
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

  render() {
    return html`<object tabindex='${this.tabIndex}' type='image/svg+xml' data='${this.data}' aria-label='${this.label}'></object>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-icon': FUIIcon;
  }
}