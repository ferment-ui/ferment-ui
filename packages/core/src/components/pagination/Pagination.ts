import { PropertyValueMap, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js';
import { range } from 'lit/directives/range.js';
import { FUIBaseElement } from '../BaseElement.js';
import componentStyles from './pagination.css.js';
import { paginationSelectEvent } from './pagination-events.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { mod } from '../../utils.js';

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
  @property({ type: Number }) maxDisplayed: number = 8;

  handleClick(e: Event) {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    if (["A", "SLOT"].includes(target.tagName) && !target.disabled) {
      this.emitPaginationEvent(target);
    }
  }

  handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.emitPaginationEvent(e.target as HTMLElement);
    }
  }

  protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('maxDisplayed')) {
      if (this.maxDisplayed < 7 || this.maxDisplayed % 2 === 0) {
        if (this.maxDisplayed < 7) {
          console.error('maxDisplayed must be at least 8');
        }
      }
    }
  }

  emitPaginationEvent(target: HTMLElement) {
    let page = this.currentPage;
    if (target.matches('li:first-child slot, li:first-child a')) {
      page--;
    } else if (target.matches('li:last-child slot, li:last-child a')) {
      page++;
    } else {
      page = parseInt(target.textContent ?? '1', 10);
    }
    this.emit(paginationSelectEvent, { page });
  }

  isCurrentPage(page: number) {
    return this.currentPage === page ? 'page' : undefined;
  }

  getPages(numPages: number) {
    
    const pages = [html`<li class='pagination__item'><a aria-current=${this.isCurrentPage(1)} tabindex='0'>1</a></li>`];
    
    if (numPages === 1) return pages;
    else if (numPages <= this.maxDisplayed) {
      for (let i = 2; i < numPages + 1; i++) {
        pages.push(html`<li class='pagination__item'><a aria-current=${this.isCurrentPage(i)} tabindex='0'>${i}</a></li>`);
      }
    }
    else {
      // here we know there will be at least one ellipsis, depending on where currentPage is
      // to keep with maxDisplayed, we need to compute the 'low' and 'high' pages, and we know
      // there will be a 1 and a {numPages} page
      // the 'low' page is the max of either 2 or currentPage - offset, BUT if currentPage - offset < 2, 
      // we need to add the difference when we compute high page
      // if lowPage > 2, we need to add an ellipsis, which removes one page from being displayed
      const maxPages = this.maxDisplayed - 3; // -3 because we there will be pages for 1, numPages, and at least one ellipsis
      

      const offset = Math.floor(maxPages / 2);
      const lowerOffset = this.currentPage - offset;
      const upperOffset = this.currentPage + offset + 1;
      const lowPage = Math.max(2, lowerOffset);
      const toAdd = this.currentPage - lowPage < 0 ? Math.abs(this.currentPage - lowPage) : 0;
      const hasLowEllipsis = lowPage > 2;
      const highPage = Math.min(numPages - 1, upperOffset + toAdd - (hasLowEllipsis ? 1 : 0));
      const highEllipsis = highPage < numPages - 1;

      console.log(`currentPage: ${this.currentPage}, lowPage: ${lowPage}, toAdd: ${toAdd}, highPage: ${highPage}, lowEllipsis: ${hasLowEllipsis}, highEllipsis: ${highEllipsis}`)
      if (hasLowEllipsis) {
        pages.push(html`<li class='pagination__item'><a>...</a></li>`);
      }
      for (let i = lowPage; i < highPage + 1; i++) {
        pages.push(html`<li class='pagination__item'><a aria-current=${this.isCurrentPage(i)} tabindex='0'>${i}</a></li>`);
      }
      if (highEllipsis) {
        pages.push(html`<li class='pagination__item'><a>...</a></li>`);
      }
      pages.push(html`<li class='pagination__item'><a aria-current=${this.isCurrentPage(numPages)} tabindex='0'>${numPages}</a></li>`);
    }

    return pages;
  }

  render() {
    const numPages = Math.ceil(this.count / this.pageSize);
    const isPrevious = this.currentPage <= 1;
    const isNext = numPages - this.currentPage < 1;
    return html`
    <nav class='pagination' @click=${this.handleClick} @keydown=${this.handleKeydown}>
      <ul>
        <li class='pagination__item' class=${classMap({'v-hidden': isPrevious})} ?aria-hidden=${isPrevious}><a tabindex='0'><slot name='previous'>Previous</slot></a></li>
        ${this.getPages(numPages)}
        <li class='pagination__item' class=${classMap({'v-hidden': isNext})} ?aria-hidden=${isNext}><a tabindex='0'><slot name='next'>Next</slot></a></li>
      </ul>
    </nav>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-pagination': FUIPagination;
  }
}
