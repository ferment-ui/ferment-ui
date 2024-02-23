import { html, CSSResultGroup } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { FUIBaseElement } from '../BaseElement.js';

enum DIAGRAM_TOOLS {
  TEXT = 'text',
  PATH = 'path',
  RECTANGLE = 'rectangle',
  OVAL = 'oval'
}

export type DiagramTool = `${DIAGRAM_TOOLS}`;

@customElement('fui-diagram')
export class FUIDiagram extends FUIBaseElement {
  static styles: CSSResultGroup = [
    FUIBaseElement.styles
  ];

  @state() selectedTool: string = '';
  @state() selectedElement: string = '';
  @state() state: string = '';

  handleToolSelect(event: Event) {
    const target = event.target as HTMLElement;
    switch (target.dataset.tool) {
      case DIAGRAM_TOOLS.TEXT:
        console.log('text');
        break;
    }
  }

  render() {
    return html`<div class=${classMap(this.classes)}>
      <ul @click=${this.handleToolSelect}>
        <li><button data-tool=${DIAGRAM_TOOLS.TEXT}>Text</button></li>
        <li><button data-tool=${DIAGRAM_TOOLS.PATH}>Path</button></li>
        <li><button data-tool=${DIAGRAM_TOOLS.RECTANGLE}>Rectangle</button></li>
        <li><button data-tool=${DIAGRAM_TOOLS.OVAL}>Oval</button></li>
      </ul>
      <div id='diagram'>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-diagram': FUIDiagram;
  }
}