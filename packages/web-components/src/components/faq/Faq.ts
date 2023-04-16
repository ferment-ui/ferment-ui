import { html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { DCBaseElement } from '../../BaseElement.js';
import { button } from '../../styles.js';
import { Faq } from '../../global';
import { join } from '../../utils.js';

@customElement('dc-faq')
export class DCFaq extends DCBaseElement {
  static styles = [
    button,
    css`
      :host {
        display: flex;
        flex-direction: column;
      }

      ul {
        list-style: none;
        list-style-position: inside;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
      }

      summary {
        cursor: pointer;
        list-style: none;
        list-style-position: inside;
      }

      details summary > * {
        display: inline;
      }
    `
  ];

  @property({ type: Array }) faqs: Faq[] = [];
  @property({ type: String }) selectedTag?: string;
  @property({ type: Number }) selectedQuestions?: number[];
  @property({ type: Object }) defaultTemplate: string | TemplateResult = 'All';

  _tagClick(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;
    const tag = target.textContent as string;
    this.selectedTag = tag !== this.defaultTemplate ? tag : undefined;
  }

  _getTagTemplate(tag: string | TemplateResult, selected: boolean) {
    return html`<li part='tag'><button part='${join({button: true, selected})}' type='button' ?aria-selected=${selected}>${tag}</button></li>`;
  }

  render() {
    if (this.faqs == null) return;
    const tags = Array.from(this.faqs.reduce((acc, faq) => {faq.tags.forEach(tag => acc.add(tag)); return acc}, new Set<string>()));
    return html`
      <ul part='tags' class='tags' @click="${this._tagClick}">
        ${this._getTagTemplate(this.defaultTemplate, this.selectedTag == null)}
        ${tags.map(tag => this._getTagTemplate(tag, tag === this.selectedTag))}
      </ul>
      <ul part='faqs' id='faqs-${this.id}' class='faqs'>
        ${this.faqs.map((faq) => html`
          <li part='faq' ?hidden=${!(this.selectedTag == null || faq.tags.includes(this.selectedTag as string))}>
            <details part='${join({details: true})}'>
              <summary part='question'>${faq.title} [${faq.tags.join(', ')}]</summary>
              <p part='answer'>${unsafeHTML(faq.content)}</p>
            </details>
          </li>`
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dc-faq': DCFaq;
  }
}
