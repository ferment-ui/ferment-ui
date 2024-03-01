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
  @property({ type: Boolean }) filterable = false;
  @property({ type: Boolean }) hideable = false;
  @property({ type: Boolean }) sortable = true;
  @property({ type: Boolean }) multiSort = false;
  @property({ type: Array }) filterList?: string[];
  @property({ type: Boolean }) showHeadingsInFooter = true;
  @property({ type: Array }) hiddenColumnHeadings: string[] = [];
  @property({ type: Object }) headingDefaults: TableHeadingDefaults = {
    hideable: true,
    sortable: true,
    filterable: false
  };
  @property({ type: Boolean }) isServerControlled = true;


  // turn a possibly nested set of headings into arrays of normalized headings with correct colspan, rowspan, and scope values
  // i.e. headings: {key: 'a', subheadings: [{key: 'b'}, {key: 'c'}]}
  // becomes: [[{key: 'a', colspan: 2, rowspan: 1}], [{key: 'b', colspan: 1, rowspan: 1}, {key: 'c', colspan: 1, rowspan: 1}]
  // uses DFS to add all "leaf" headings to the last row, then works it's way back up
  get _normalizedColumnHeadings(): TableHeadingData[][] {
    const rows: TableHeadingData[][] = [];
    const depth = maxDepth(this.headings, 'subheadings');
    this._normalizedColumnHeadingsRecursive(this.headings, depth, 0, rows);
    return rows;
  }

  _normalizedColumnHeadingsRecursive(headings: Array<string | TableHeading>, maxDepth: number, depth: number, rows: TableHeadingData[][]) {
    headings.forEach(heading => {
      if (!((maxDepth - depth) in rows)) {
        rows[maxDepth - depth] = [];
      }
      if (typeof heading !== 'string') {
        // inner node
        if (Array.isArray(heading.subheadings)) {
          console.log('only once', maxDepth);
          this._normalizedColumnHeadingsRecursive(heading.subheadings, maxDepth, depth + 1, rows);
          rows[maxDepth - depth].push({
            ...this.headingDefaults,
            ...heading,
            ...{
              colspan: maxWidth(heading.subheadings, 'subheadings'), // TODO: memoize this so we don't recompute
              rowspan: maxDepth - depth,
              hidden: false // inner nodes can never be hidden
            }
          } as TableHeadingData);
        }

        // leaf node
        else {
          rows[maxDepth].push({
            ...this.headingDefaults,
            ...heading,
            ...{
              colspan: 1,
              rowspan: maxDepth - depth,
              hidden: this.hiddenColumnHeadings.includes(heading.key)
            }
          } as TableHeadingData);
        }
      }

      // strings are specialized leaf nodes
      else {
        rows[maxDepth].push({
          key: heading,
          content: heading,
          colspan: 1,
          rowspan: maxDepth - depth,
          hidden: this.hiddenColumnHeadings.includes(heading)
        } as TableHeadingData);
      }
    });
  }

  toggleSortOrder(sort?: SortOrder) {
    return sort === 'ascending' ? 'descending' : 'ascending';
  }

  getHeadingTemplate(headingRows: TableHeadingData[][], showIcons: boolean) {
    return map(headingRows,
      headingRow => html`<tr>${map(headingRow,
        ({ content, colspan, rowspan, hideable, hidden, sortable, sort, subheadings }, index) => hidden === true
          ? nothing
          : html`
              <th colspan=${colspan ?? 1} rowspan=${rowspan ?? 1} scope=${subheadings > 0 ? 'colgroup' : 'col'} aria-sort=${ifDefined(sort)}>
                <button
                  type='button'
                  aria-pressed=${ifDefined(sort == null ? undefined : sortOptions.includes(sort))}
                  aria-label=${`${content}: activate to sort column ${this.toggleSortOrder(sort)}`}
                  @click=${() => this.emit(TABLE_SORT_EVENT, { index, content, order: this.toggleSortOrder(sort)})}
                >
                    ${content}${showIcons && sortable ? this.sortToggle() : nothing}${hideable ? this.hideToggle : nothing}
                </button>
              </th>
            `
      )}
    </tr>`);
  }

  hideToggle = html`<gc-button aria-label="hide heading"><gc-icon name='remove'></gc-icon></gc-button>`;

  sortToggle() {
    return html`<span class='sort-icons'></span>`;
  }

  handleHeading(event: Event) {
    console.log(event);
  }

  render() {
    const headings = this._normalizedColumnHeadings;
    const lastHeadingRow = headings[headings.length - 1];

    return html`<div class=${classMap(this.classes)}>
      ${this.filterable ? html`<gc-input label="Filter" id=${`${this.id}-filter`}></gc-input>` : nothing}
      <table part="table">
        <slot name="caption"><caption part="caption">${this.caption}</caption></slot>
        <thead>
          ${this.getHeadingTemplate(headings, true)}
        </thead>
        <tbody>
          ${this.entries.map(entry => html`<tr>${
            Array.isArray(entry)
              ? entry.map(cell => html`<td>${cell}</td>`)
              : lastHeadingRow.map(({ key }) => html`<td>${entry[key]}</td>`)
            }
          </tr>`)}
        </tbody>
        ${this.showHeadingsInFooter
          ? html`
            <tfoot>
              ${headings.reverse().map(row => html`<tr>${row.map(({ content }) => html`<th>${content}</th>`)}</tr>`)}
            </tfoot>`
          : nothing
        }
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
