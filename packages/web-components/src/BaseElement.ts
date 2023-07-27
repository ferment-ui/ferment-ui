import { LitElement } from 'lit';
import { getId } from './utils.js';

export class FUIBaseElement extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.id = this.id || getId();
  }
}
