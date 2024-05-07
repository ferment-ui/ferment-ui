import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js';
import cardStyles from './card.css.js';

/**
 * Card component for displaying isolated content. 
 * @element fui-card
 * @prop {String} layout - Position of the layout element. Can be 'left', 'right', 'top', or 'bottom'. Defaults to 'left'.
 */
@customElement('fui-card')
export class FUICard extends LitElement {
  static styles = [
    cardStyles
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