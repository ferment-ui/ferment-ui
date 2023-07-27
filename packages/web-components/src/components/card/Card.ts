import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js';

/**
 * Card component for displaying isolated content. 
 * @element dc-card
 * @prop {String} layout - Position of the layout element. Can be 'left', 'right', 'top', or 'bottom'. Defaults to 'left'.
 */
@customElement('fui-card')
export class FUICard extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: row;
        align-items: stretch;
      }

      .card {
        flex: 1;
        display: grid;
        border: 1px solid currentColor;
        border-radius: var(--br);
        box-shadow: var(--bs-1);
        overflow: hidden;
        padding: var(--S-card);
      }

      slot[name='image'] {
        grid-area: image;
        display: grid;
      }

      slot[name='header'] {
        grid-area: header;
      }

      slot:not([name]) {
        grid-area: body;
      }

      slot[name='footer'] {
        grid-area: footer;
      }
    `
  ];

  @property({ type: String }) layout: 'left' | 'right' | 'top' | 'bottom' = 'top';

  _getGridTemplateRules() {
    const gridTemplate = {
      gridTemplateAreas: `
      'image'
      'header'
      'body'
      'footer'`,
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto 1fr auto'
    };

    switch (this.layout) {
      case 'bottom':
        gridTemplate.gridTemplateAreas = `
          'header'
          'body'
          'footer'
          'image'`
        break;
      case 'left':
        gridTemplate.gridTemplateAreas = `
          'image header'
          'image body'
          'image footer'`
        gridTemplate.gridTemplateColumns = 'auto 1fr'
        gridTemplate.gridTemplateRows = 'auto'
        break;
      case 'right':
        gridTemplate.gridTemplateAreas = `
          'header image'
          'body image'
          'footer image'`,
        gridTemplate.gridTemplateColumns = '1fr auto'
        gridTemplate.gridTemplateRows = 'auto'
        break;
    }
      
    return gridTemplate;
  }

  render() {
    return html`<div class='card' part='card' style=${styleMap(this._getGridTemplateRules())}>
      <slot name='image'></slot>
      <slot name='header'></slot>
      <slot></slot>
      <slot name='footer'></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-card': FUICard;
  }
}