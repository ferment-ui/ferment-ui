import { html, css, TemplateResult, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { FUIBaseElement } from '../BaseElement.js';

export type Sorted = 'asc' | 'des';

export type TableHeading = TableHeadingDefaults & {
  label: string | TemplateResult;
  hidden?: boolean;
  sorted?: Sorted;
};

export type TableHeadingDefaults = {
  span?: number,
  hideable: boolean,
  sortable: boolean,
  filterable: boolean,
}

export type TableCell = string | number | boolean | Date | TemplateResult;

function sortToggle(_value?: Sorted) {return  html`<span>up</span><span>down</span>`};
const hideToggle = html`<span>x</span>`;

@customElement('fui-table')
export class FUITable extends FUIBaseElement {
  static styles = [
    FUIBaseElement.styles,
    css`
      table {
        border-collapse: collapse;
        border: 1px solid black;
      }
    `
  ];

  @property({ type: Array }) headings: Array<string | TableHeading[]> = [];
  @property({ type: Array }) entries: TableCell[][] = [];
  @property({ type: Boolean }) sortable = false;
  @property({ type: Boolean }) hideable = false;
  @property({ type: Boolean }) filterable = false;
  @property({ type: Array }) filterList?: string[] | undefined;
  @property({ type: Object }) headingDefaults: TableHeadingDefaults = {
    span: 1,
    hideable: false,
    sortable: false,
    filterable: false,
  }

  get _normalizedHeadings(): TableHeading[] {
    return this.headings.map(heading => Object.assign(
        this.headingDefaults,
        typeof heading === 'object' ? heading : {label: heading}
      ) as TableHeading
    );
  }

  get _hiddenHeadings(): Array<string | TemplateResult> {
    return this._normalizedHeadings.filter(heading => heading.hidden).map(heading => heading.label);
  }

  render() {
    super.render();
    return html`
      ${this.filterable ? html`<fui-input label='Filter' id=${`${this.id}-filter`}></fui-input>` : nothing}
      <table>
        <slot name='headings'><thead>${this._normalizedHeadings.map(({label, span, hideable, hidden, sortable, sorted}) => !hidden ?? html`<th colspan=${span}>${label}${sortable ? sortToggle(sorted) : nothing}${hideable ? hideToggle : nothing}</th>`)}</thead></slot>
        <slot name='body'><tbody>${this.entries.map(entry => html`<tr>${entry.map(cell => html`<td>${cell}</td>`)}`)}</tbody></slot>
      </table>
      ${this._hiddenHeadings}
    `;
  }
}
