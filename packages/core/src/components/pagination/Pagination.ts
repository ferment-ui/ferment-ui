import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js';
import { range } from 'lit/directives/range.js';

@customElement('fui-pagination')
export class FUIPagination extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: row;
        border-radius: var(--border-radius, 4px);
        border: none;
      }

      button {
        border-radius: 0;
        border: 1px solid black;
        border-right: 0;
        cursor: pointer;
      }

      button:last-child {
        border-right: 1px solid black;
      }

      button[disabled] {
        cursor: not-allowed;
      }
    `
  ];

  // TODO: use container query to determine how many to show/replace with ...

  @property({ type: Number }) count: number = 0;
  @property({ type: Number }) pageSize: number = 10;
  @property({ type: Number }) currentPage: number = 1;

  render() {
    const numPages = Math.ceil(this.count / this.pageSize);
    return html`<button ?disabled=${this.currentPage <= 1}>prev</button>${map(range(numPages), page => html`<button @click=${(e: MouseEvent) => this.currentPage = parseInt((e.target as HTMLElement).textContent!)}>${page + 1}</button>`)}<button ?disabled=${this.currentPage >= numPages}>next</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-pagination': FUIPagination;
  }
}
