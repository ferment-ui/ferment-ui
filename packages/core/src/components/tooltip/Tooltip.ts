import { CSSResultGroup, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { FUIBaseElement } from '../BaseElement.js';
import { PopupController } from '../../controllers/PopupController.js';
import tooltipStyles from './tooltip.css.js';

@customElement('fui-tooltip')
export class FUITooltip extends FUIBaseElement {
  static readonly styles: CSSResultGroup = [
    tooltipStyles,
    css`
      :host {
        display: inline-block;
        position: absolute;
        padding: 4px;
        border: 1px solid darkgray;
        border-radius: 4px;
        background: #ccc;
        pointer-events: none;
      }
    `
  ];

  #popupController!: PopupController;

  @property({ type: String }) target: HTMLElement | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.#popupController = new PopupController(this, this.target ?? this.previousElementSibling as HTMLElement);
    this.#popupController.hide();
  }

  protected willUpdate(_changedProperties: PropertyValues): void {
    super.willUpdate(_changedProperties);
    if (_changedProperties.has('target') && this.#popupController) {
      this.#popupController.target = this.target ?? this.previousElementSibling as HTMLElement;
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}
