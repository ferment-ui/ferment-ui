import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('dc-list')
export class DCList extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      ul {
        list-style: none;
        list-style-position: inside;
      }
    `
  ];

  @property({ type: Array }) items: any[] = [];
  @property({ type: Object }) itemTemplate: (item: any) => TemplateResult = (item: any) => html`<li>${item}</li>`;

  render() {
    return html`<ul part="ul">
      ${this.items.map(item => this.itemTemplate(item))}
    </ul>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dc-list': DCList;
  }
}