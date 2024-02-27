import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js';
import { range } from 'lit/directives/range.js';
import { FUIBaseElement } from '../BaseElement.js';
import componentStyles from './pagination.css.js';
import { paginationEvent } from './pagination-event.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * 
 * Potential improvements:
 * - [ ] don't render anything after the first page if the there is only one page, instead of hidding everything
 */

@customElement('fui-pagination')
export class FUIPagination extends FUIBaseElement {
  static styles = [
    FUIBaseElement.styles,
    componentStyles
  ];

  @property({ type: Number }) count: number = 0;
  @property({ type: Number }) pageSize: number = 10;
  @property({ type: Number }) currentPage: number = 1;
  @property({ type: Number }) maxDisplayed: number = 5;

  handleClick(e: Event) {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    if (target.tagName === "A" && !target.disabled) {
      this.emitPaginationEvent(target);
    }
  }

  handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.emitPaginationEvent(e.target as HTMLElement);
    }
  }

  emitPaginationEvent(target: HTMLElement) {
    let page = this.currentPage;
    if (target.matches('li:first-child a')) {
      page--;
    } else if (target.matches('li:last-child a')) {
      page++;
    } else {
      page = parseInt(target.textContent ?? '1', 10);
    }
    this.emit(paginationEvent, { page });
  }

  isCurrentPage(page: number) {
    return this.currentPage === page ? 'page' : undefined;
  }

  render() {
    const numPages = Math.ceil(this.count / this.pageSize);
    const offset = Math.floor(this.maxDisplayed / 2);
    const minOffsetPage = Math.max(2, this.currentPage - offset);
    const maxOffsetPage = Math.min(numPages - 1, this.currentPage + offset);

    return html`
    <nav class='pagination' @click=${this.handleClick} @keydown=${this.handleKeydown} aria-live=>
      <ul>
        <li ?hidden=${this.currentPage <= 1} tabindex='0'><a tabindex='0'><slot name='previous'>Previous</slot></a></li>
        <li><a aria-current=${ifDefined(this.isCurrentPage(1))} tabindex='0'>1</a></li>
        <li ?hidden=${minOffsetPage <= 2} aria-hidden='true'><a disabled>...</a></li>
        ${map(range(minOffsetPage, maxOffsetPage + 1), page => html`<li><a aria-current=${ifDefined(this.isCurrentPage(page))} tabindex='0'>${page}</a></li>`)}
        <li ?hidden=${numPages - maxOffsetPage < 2} aria-hidden='true'><a disabled>...</a></li>
        <li ?hidden=${numPages === 1}><a aria-current=${ifDefined(this.isCurrentPage(numPages))} tabindex='0'>${numPages}</a></li>
        <li ?hidden=${numPages - this.currentPage < 1}><a tabindex='0'><slot name='next'>Next</slot></a></li>
      </ul>
    </nav>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-pagination': FUIPagination;
  }
}
