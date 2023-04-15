import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { Faq } from '../../global';

@customElement('dc-faq')
export class DCFaq extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      ul {
        list-style: none;
        list-style-position: inside;
      }

      button {
        outline: none;
        border: none;
        background: none;
      }
    `
  ];

  @property({ type: Array }) faqs: Faq[] = [];
  @property({ type: String }) activeTag?: string;

  _tagClick(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;
    this.activeTag = target.innerText;
  }

  render() {
    const tags = Array.from(this.faqs.reduce((acc, faq) => {faq.tags.forEach(tag => acc.add(tag)); return acc}, new Set<string>()));
    return html`
      <div class='tags'>
        <ul @click="${this._tagClick}">
          ${tags.map(tag => html`<li><button>${tag}</button></li>`)}
        <ul>
      </div>
      <div class='faqs'>
        <ul>
          ${this.faqs.filter(faq => this.activeTag == null || faq.tags.includes(this.activeTag)).map(faq => html`<li><details><summary>${faq.title}</summary>${faq.content}</details>Tags: ${faq.tags.join(', ')}</li>`)}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dc-faq': DCFaq;
  }
}
