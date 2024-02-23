import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { FUIBaseElement } from '../BaseElement.js';
import { InterleaveController } from '../../controllers/InterleaveController.js';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('fui-splitter')
export class FUISplitter extends FUIBaseElement {
  static styles = [
    css`
      [role=separator] {
        background-color: gray;
      }

      [part=container] {
        display: flex;
        align-items: stretch;
        flex: 1;
      }
    `
  ];
  
  static shadowRootOptions: ShadowRootInit = {...super.shadowRootOptions, slotAssignment: 'manual'}

  @property({ type: String }) direction: 'row' | 'column' = 'column';

  get separator() {
    return html`<div role="separator" part="separator" style=${styleMap({cursor: this.direction === 'row' ? 'ew-resize' : 'ns-resize'})}>/</div>`
  }

  #interleave = new InterleaveController(this, this.separator);

  render() {
    return html`
      <div part="container" style=${styleMap({flexDirection: this.direction})}>
        ${this.#interleave.renderables()}
      </div>
    `;
  }
}
