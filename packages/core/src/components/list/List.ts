import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { choose } from 'lit/directives/choose.js';
import { FUIBaseElement } from '../BaseElement.js';
import listStyle from './list.css.js';

export type ListType = 'ul' | 'ol' | 'dl';

@customElement('fui-list')
export class FUIList extends FUIBaseElement {
  static styles = [
    listStyle
  ];

  @property({ type: String }) type: ListType = 'ul';
  @property({ type: Array }) items: any[] = [];

  render() {
    return choose(this.type, [
      ['ul', () => html`<ul part='list'><slot>${this.items.map(item => html`<li>${item}</li>`)}</slot></ul>`],
      ['ol', () => html`<ol part='list'><slot>${this.items.map(item => html`<li>${item}</ol>`)}</slot></ol>`],
      ['dl', () => html`<dl part='list'><slot>${this.items.map(item => html`<dt>${item.dt}</dt><dd>${item.dd}</dd>`)}</slot></dl>`]
    ]);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-list': FUIList;
  }
}