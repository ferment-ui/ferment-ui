/**
 * @element fui-panel
 * 
 * @description - A panel that slides in and out from the side of the screen.
 * @slot - The content of the panel.
 * @csspart panel__panel - The panel that slides in and out.
 */

import {html, css, LitElement} from 'lit';
import {customElement, property, queryAssignedElements, state} from 'lit/decorators.js';
import { getFocusableElements } from '../../utils';

@customElement('fui-panel')
export class FUIPanel extends LitElement {
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
      position: absolute;
      top: 0;
      left: 0;
      inline-size: 100%;
      block-size: 100%;
      background: black;
      color: white;
      overscroll-behavior: contain;

      &[aria-expanded='true'] {
        display: block;
      }

      &[aria-expanded='false'] {
        display: none;
      }
    }
  }`;
  
  @state()
  open = false;

  @state()
  enabled = false;

  @property({type: Number})
  maxWidth = 768;

  @queryAssignedElements({flatten: true})
  _focusablePanelElements!: NodeListOf<HTMLElement>;

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

    // TODO: should these event listeners be removed when the panel is closed?
    if (this.open) {
      // close the panel when clicking outside of it
      this.shadowRoot?.addEventListener('click', (event: MouseEvent) => {
        if (event.target instanceof HTMLElement && event.target.closest('[part=panel]')) {
          this.open = false;
        }
      });

      // close the panel when pressing the escape key
      this.shadowRoot?.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          this.open = false;
        }
      });

      // close the panel when pressing the tab key on the last focusable element
      // NOTE: the last focusable element needs to updated on slot change
      const lastFocusableElement = [...this._focusablePanelElements].map(getFocusableElements).flat(Infinity).at(-1);
      lastFocusableElement?.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Tab' && !event.shiftKey) {
          this.open = false;
        }
      });
    }
  }

  render() {
    return html`
      <div class='panel_wrapper' enabled=${this.enabled}>
        <button part='panel__trigger' type='button' aria-label=${`${this.open ? 'Close' : 'Open'} menu`} @click=${this.toggleOpen}>
          <slot name='toggle' aria-hidden='true'><span class='panel__bar'></span></slot>
        </button>
        <div part='panel' aria-expanded=${this.open}>
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