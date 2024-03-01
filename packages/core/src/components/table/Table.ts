import { html, nothing } from 'lit';
import type { CSSResultGroup, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FUIBaseElement } from '../BaseElement.js';
import '../pagination/Pagination.js';
import tableStyles from './table.css.js';
import '../icon/Icon.js';
import { maxDepth, maxWidth } from '../../utils.js';
import { map } from 'lit/directives/map.js';
import { TABLE_SORT_EVENT } from './table-events.js';


// you can either have an array of headings and entities, or an object of headings and an array of entities with the same keys
// ['Hello', {content: 'World'}, 'Foo', 'Bar'] -> [['1', '2', '3', {content: '4'}]]
// or
// {a: 'Hello', b: {content: 'World'}, c: 'Foo', d: 'Bar'} -> [{a: '1', b: '2', c: '3', d: {content: '4'}}]

const sortOptions = ['ascending', 'descending'] as const;
export type SortOrder = typeof sortOptions[number];
export type MultiSortOrder = Array<[number, SortOrder]>;

export type CellContent = string | number | boolean | Date | Node | TemplateResult;

export interface TableCell {
  content: CellContent
  colspan?: number
  rowspan?: number
  key?: string
}

export interface TableHeadingDefaults {
  filterable: boolean
  hideable: boolean
  sortable: boolean
}

export type TableHeading = TableHeadingDefaults & {
  key: string
  content: string
  sort?: SortOrder
  subheadings?: TableHeading[]
};

type TableHeadingData = TableHeading & {
  colspan: number
  rowspan: number
  hidden?: boolean
  subheadings: number
};

@customElement('fui-table')
export class FUITable extends FUIBaseElement {
  static styles: CSSResultGroup = [
    FUIBaseElement.styles,
    tableStyles
  ];

  @property({ type: Array }) headings: Array<string | TableHeading> = [];
  @property({ type: Array }) rowHeadings: TableHeading[] = [];
  @property({ type: Array }) entries: Array<Array<CellContent | TableCell>> = [];
  @property({ type: String }) caption!: string | Node | TemplateResult;
  @property({ type: Boolean }) sortable = true;
  @property({ type: Boolean }) multiSort = false;
  @property({ type: Boolean }) showHeadingsInFooter = true;
  @property({ type: Array }) hiddenColumnHeadings: string[] = [];
  @property({ type: Object }) headingDefaults: TableHeadingDefaults = {
    hideable: true,
    sortable: true,
    filterable: false
  };
  @property({ type: Boolean }) isServerControlled = true;

  headingIcons(heading: string | TableHeading) {
    return !this.sortable || (typeof heading === 'object' && !heading.sort) ? nothing : html`<button type="button" class="table__sort-icon" part="sort-icon" aria-label="Sort"><fui-icon icon="arrow-up"></fui-icon><fui-icon icon="arrow-down"></fui-icon></button>`;
  }

  render() {
    return html`<div class=${classMap(this.classes)}>
      <table part="table">
        <slot>
          <slot name="caption"><caption part="caption">${this.caption}</caption></slot>
          <thead>
            <tr>
              ${map(this.headings, heading => html`
                <th colspan='1' rowspan='1' scope='col'>${typeof heading === 'object' ? heading.content : heading}${this.headingIcons(heading)}</th>
              `)}
            </tr>
          </thead>
          <tbody>
            ${map(this.entries, entry => html`<tr>${map(entry, (cell) => html`<td>${cell}</td>`)}</tr>`)}
          </tbody>
          ${this.showHeadingsInFooter
            ? html`
              <tfoot>
                ${map(this.headings, heading => html`<th>${typeof heading === 'object' ? heading.content : heading}</th>`)}
              </tfoot>`
            : nothing
          }
        </slot>
      </table>
      <fui-pagination count=${this.entries.length} pageSize='10'></fui-pagination>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-table': FUITable
  }
}
