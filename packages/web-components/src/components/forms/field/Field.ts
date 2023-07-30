import { LitElement, css, html } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';

@customElement('fui-field')
export class FUIField extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  static formAssociated = true;

  @property({ type: Object }) fieldAttrs: { [key: string]: unknown } = {};
  @property({ type: String }) name: string | undefined;
  @property({ type: String}) label: string | undefined;
  @state() _value: any;
  _internals: ElementInternals;

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  // The following properties and methods aren't strictly required,
  // but browser-level form controls provide them. Providing them helps
  // ensure consistency with browser-provided controls.
  get form() { return this._internals.form; }
  get type() { return this.localName; }
  get validity() {return this._internals.validity; }
  get validationMessage() {return this._internals.validationMessage; }
  get willValidate() {return this._internals.willValidate; }

  checkValidity() { return this._internals.checkValidity(); }
  reportValidity() {return this._internals.reportValidity(); }

  render() {
    return html`<div class="field"><slot></slot></div>`
  }
}
