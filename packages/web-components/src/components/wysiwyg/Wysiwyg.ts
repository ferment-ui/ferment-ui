import { html, css, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { FUIBaseElement } from '../BaseElement.js';

// @ts-ignore
function hasAncestor(node: Node, selector: string): boolean {
  let parent = node.parentNode;
  while (parent != null) {
    if ('matches' in parent && (parent as Element).matches(selector)) return true; // basic check to see if it is an Element
    parent = parent.parentNode;
  }
  return false;
}

@customElement('fui-wysiwyg')
export class FUIWysiwyg extends FUIBaseElement {
  static styles: CSSResultGroup = [
    FUIBaseElement.styles,
    css`
      .toolbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      strong {
        font-weight: bold;
      }

      em {
        font-style: italic;
      }
    `
  ];

  handleAction(_action: string) {
    const selection = window.getSelection() as Selection;
    const range = selection.getRangeAt(0);
    const anchorNode = selection.anchorNode as Node;
    const focusNode = selection.focusNode as Node;

    // NOTES:
    // selection is always of a text node?
    // if the nodes are not the same, it spans multiple nodes (i.e. <h1>n1</h1><h2>n2</h2> or <p>n1 <strong>n2</strong> n3</p>)

    if (anchorNode === focusNode) {
      console.log('same node');
      range.surroundContents(document.createElement('strong'));
    }
    else {
      const ancestor = range.commonAncestorContainer;
      console.log('single node, nested nodes');
      console.log(ancestor, ancestor.childNodes)
      anchorNode.childNodes.forEach((node: Node) => {
        if (node.contains(anchorNode)) {
          console.log(node);
        }
        else if (node.contains(focusNode)) {
          console.log(node);
        }
      });
    }
  }
  
  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.ctrlKey) {
        // if (['b', 'i', 'u', '[', ']'].includes(event.key)) {
        //   event.preventDefault();
        // }
      }
    });
  }

  _hasSelection() {
    const {anchorNode, focusNode, anchorOffset} = window.getSelection() as Selection;
    return !(anchorNode === focusNode && anchorOffset === 0);
  }

  handleToolbarClick(e: PointerEvent) {
    const target = e.target as HTMLElement;
    console.log(target, this._hasSelection());
    if (!this._hasSelection()) return;
    const action = target.dataset.action;
    if (action != null) {
      this.handleAction(action);
    }
  }

  render() {
    return html`<div class=${classMap(this.classes)}>
      <div class="toolbar" @click=${this.handleToolbarClick}>
        <button data-action='bold'>bold</button>
        <button>italic</button>
        <button>underline</button>
        <button>strikethrough</button>
        <button>superscript</button>
        <button>subscript</button>
        <button>justify left</button>
        <button>justify center</button>
        <button>justify right</button>
        <button>justify full</button>
        <button>indent</button>
        <button>outdent</button>
        <button>undo</button>
        <button>redo</button>
        <button>link</button>
        <button>image</button>
        <button>ordered list</button>
        <button>unordered list</button>
        <button>code</button>
        <button>quote</button>
      </div>
      <div class="content-area">
        <div class="visuell-view" contenteditable>
        lorem ipsum dolor sit amet
        </div>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-wysiwyg': FUIWysiwyg;
  }
}