var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
/**
 * Card component for displaying isolated content.
 * @element dc-card
 * @prop {String} layout - Position of the layout element. Can be 'left', 'right', 'top', or 'bottom'. Defaults to 'left'.
 */
let DCCard = class DCCard extends LitElement {
    constructor() {
        super(...arguments);
        this.layout = 'top';
    }
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
          'image'`;
                break;
            case 'left':
                gridTemplate.gridTemplateAreas = `
          'image header'
          'image body'
          'image footer'`;
                gridTemplate.gridTemplateColumns = 'auto 1fr';
                gridTemplate.gridTemplateRows = 'auto';
                break;
            case 'right':
                gridTemplate.gridTemplateAreas = `
          'header image'
          'body image'
          'footer image'`,
                    gridTemplate.gridTemplateColumns = '1fr auto';
                gridTemplate.gridTemplateRows = 'auto';
                break;
        }
        return gridTemplate;
    }
    render() {
        return html `<div class='card' part='card' style=${styleMap(this._getGridTemplateRules())}>
      <slot name='image'></slot>
      <slot name='header'></slot>
      <slot></slot>
      <slot name='footer'></slot>
    </div>`;
    }
};
DCCard.styles = [
    css `
      :host {
        display: block;
      }

      .card {
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
__decorate([
    property({ type: String })
], DCCard.prototype, "layout", void 0);
DCCard = __decorate([
    customElement('dc-card')
], DCCard);
export { DCCard };
