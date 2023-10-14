import { html, css, TemplateResult, PropertyValueMap } from 'lit';
import { customElement, property, state } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { FUIBaseElement } from '../BaseElement.js';
import { button } from '../../styles.js';
import { join } from '../../utils.js';
import { Faq } from '../../global.d.js';

@customElement('fui-faq')
export class FUIFaq extends FUIBaseElement {
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
        padding: var(--p-faq-v, 4px) var(--p-faq-h, 4px);
      }

      details summary > * {
        display: inline;
      }
    `
  ];

  @property({ type: Array }) faqs: Faq[] = [];
  @property({ type: String }) selectedTag?: string;
  @property({ type: Array }) selectedQuestions: string[] | number[] = [];
  @property({ type: Object }) allTagsTemplate: string | TemplateResult = 'All';
  @state() private _selectedQuestions: Set<string> = new Set();

  protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('selectedQuestions')) {
      this._selectedQuestions = new Set(this.selectedQuestions.map(q => q.toString()));
    }
  }

  _tagClick(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;
    const tag = target.textContent as string;
    this.selectedTag = tag !== this.allTagsTemplate ? tag : undefined;
  }

  _faqClick(e: MouseEvent) {
    e.preventDefault();
    const key = (e.target as HTMLElement).dataset.key! as never;
    if (this._selectedQuestions.has(key)) {
      this._selectedQuestions.delete(key);
    }
    else this._selectedQuestions.add(key);
    this.requestUpdate();
  }

  focusFaq(key: string | number) {
    const faq = this.renderRoot.querySelector(`[data-key=${key}]`) as HTMLElement;
    if (!faq) {
      console.debug('No faq found with key', key);
    }
    else {
      faq.focus();
    }
  }

  private _getTagTemplate(tag: string | TemplateResult, selected: boolean) {
    return html`<li part='tag'><button part='${join({button: true, selected})}' type='button' ?aria-selected=${selected}>${tag}</button></li>`;
  }

  private _getFaqTemplate(faq: Faq, index: number) {
    const key = faq.key ?? index.toString();
    const selected = this._selectedQuestions.has(key);
    return html`
    <li part='faq' ?hidden=${!(this.selectedTag == null || faq.tags.includes(this.selectedTag as string))}>
      <details part='${join({details: true})}' ?open='${selected}'>
        <summary part='${join({question: true, selected})}' data-key=${key}>${faq.title}</summary>
        <p part='answer'>${unsafeHTML(faq.content)}</p>
      </details>
    </li>`;
  }

  render() {
    if (this.faqs == null) return;
    const tags = Array.from(this.faqs.reduce((acc, faq) => {faq.tags.forEach(tag => acc.add(tag)); return acc}, new Set<string>()));
    return html`
      <ul part='tags' class='tags' @click="${this._tagClick}">
        ${this._getTagTemplate(this.allTagsTemplate, this.selectedTag == null)}
        ${tags.map(tag => this._getTagTemplate(tag, tag === this.selectedTag))}
      </ul>
      <ul part='faqs' class='faqs' @click=${this._faqClick}>
        ${this.faqs.map((faq, index) => this._getFaqTemplate(faq, index))}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-faq': FUIFaq;
  }
}
