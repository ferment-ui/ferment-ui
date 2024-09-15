/**
 * @element fui-panel
 * 
 * @description - A panel that slides in and out from the side of the screen.
 * @slot - The content of the panel.
 * @csspart panel__panel - The panel that slides in and out.
 */

import { html, css } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { getFocusableElements } from '../../utils';
import { FUIBaseElement } from '../BaseElement.js';

@customElement('fui-panel')
export class FUIPanel extends FUIBaseElement {
  static readonly styles = css`
  .panel__bar,
  .panel__bar::before,
  .panel__bar::after {
    display: block;
    width: 24px;
    height: 3px;
    background: black;
    border: 1px solid var(--color-light);
    position: absolute;
    border-radius: 3px;
    left: 50%;
    margin-left: -12px;
    transition: transform 350ms ease-in-out;
    content: '';
  }
  
  .panel__bar {
    top: 50%;
    transform: translateY(-50%);
  
    &::before {
      top: -8px;
    }

    &::after {
      top: 8px;
    }
  }
  
  [part='panel__trigger'] {
    display: block;
    inline-size: 2rem;
    block-size: 2rem; /* Nice big tap target */
    position: relative;
    z-index: 1;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  [enabled='false'] [part='panel__trigger'] {
    display: none;
  }

  [enabled='true'] {
    & [part='panel'] {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      inline-size: 100%;
      block-size: 100%;
      background: black;
      color: white;
      overscroll-behavior: contain;
    }

    &[open='true'] {
      & [part='panel'] {
        display: block;
      }
    }
  }`;
  
  @state()
  open = false;

  @state()
  enabled = false;

  @property({type: Number})
  maxWidth = 760;

  @property({type: String})
  panelId = `panel-${Math.random().toString(36).slice(2, 9)}`;

  @queryAssignedElements({flatten: true})
  _slottedElements!: Array<HTMLElement>;

  firstUpdated() {
    // enable the burger menu if the parent is smaller than the max width
    const observer = new ResizeObserver(observedItems => {
      const {contentRect} = observedItems[0];
      this.enabled = contentRect.width <= this.maxWidth;
    });
    observer.observe(this.shadowRoot?.host.parentElement as Element);
  }

  toggleOpen() {
    this.open = !this.open;

    console.log('here');

    // TODO: should these event listeners be removed when the panel is closed?
    if (this.open) {
      // close the panel when clicking outside of it
      document.addEventListener('click', (event: MouseEvent) => {
        console.log(event.target);
        if (event.target instanceof HTMLElement && event.target.closest('[part=panel]')) {
          this.open = false;
        }
      });

      // close the panel when pressing the escape key
      document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          this.open = false;
        }
      });

      // close the panel when pressing the tab key on the last focusable element
      // NOTE: the last focusable element needs to updated on slot change
      const lastFocusableElement = [...this._slottedElements].map(getFocusableElements).flat(Infinity).at(-1) as HTMLElement;
      lastFocusableElement?.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Tab' && !event.shiftKey) {
          this.open = false;
        }
      });
    }

    this.emit('fui-panel', {open: this.open});
  }

  render() {
    return html`
      <div class='panel_wrapper' enabled=${this.enabled} open=${this.open} @click=${this.toggleOpen}>
        <button part='panel__trigger' type='button' aria-label=${`${this.open ? 'Close' : 'Open'} menu`} aria-controls=${this.panelId} aria-expanded=${this.open}>
          <slot name='toggle' aria-hidden='true'><span class='panel__bar'></span></slot>
        </button>
        <div id=${this.panelId} part='panel'>
          <slot />
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-panel': FUIPanel;
  }
}