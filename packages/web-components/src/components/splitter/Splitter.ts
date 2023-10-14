import { LitElement, html, css, TemplateResult, PropertyValueMap } from 'lit';
import { customElement, queryAssignedNodes, state } from 'lit/decorators.js'

@customElement('fui-splitter')
export class FUISplitter extends LitElement {
  static shadowRootOptions: ShadowRootInit = {...super.shadowRootOptions, slotAssignment: 'manual'}

  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  @state()
  panes: TemplateResult[] = [];

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    console.error('firstUpdated', this.shadowRoot?.querySelector('slot')?.assignedNodes());
    console.error(this.shadowRoot?.children);
  }

  protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
      console.error('willUpdate', this.shadowRoot?.querySelector('slot')?.assignedNodes());
  }

  @queryAssignedNodes()
  _slottedChildren!: HTMLElement[];

  _slotChange(_event: any) {
    // this.panes = this._slottedChildren.map(child => {
    //   return html`${child.cloneNode(true)}<div class='divider'></div>`
    // })
  }

  render() {
    console.error('render', this.panes);
    return html`<slot @slotchange=${this._slotChange}></slot>${this.panes}`;
  }
}
