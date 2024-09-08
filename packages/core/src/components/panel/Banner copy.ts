import {html, css, LitElement} from 'lit';
import {customElement, query} from 'lit/decorators.js';

@customElement('fui-banner')
export class FUIBanner extends LitElement {
  static readonly styles = css`
    #sidenav-container {
      display: grid;
      grid: [stack] 1fr / min-content [stack] 1fr;
      min-height: 100svh;
    }
      
    #sidenav-open {
      --duration: .6s;
      display: grid;
      grid-template-columns: [nav] 2fr [escape] 1fr;
    }
      
    @media (max-width: 540px) {
      #sitenav-container > * {
        grid-area: stack;
      }
      
      #sidenav-open {
        visibility: hidden;
        transform: translateX(-110vw);
        will-change: transform;
        transition:
          transform: var(--duration) var(--easeOutExpo),
          visibility 0s linear var(--duration);
      
        &:target {
          visibility: visible;
          transform: translateX(0);
          transition:
            transform: var(--duration) var(--easeOutExpo);
        }
      }
    }
      
    @media (prefers-reduced-motion: reduce) {
      #sidenav-open {
        --duration: 1ms;
      }
    }
  `;
  
  @query('#sidenav-open', true)
  _sidenav?: HTMLElement;
  
  firstUpdated() {
    console.log(this._sidenav)
    this._sidenav?.addEventListener('keyup', e => {
      if (e.code === 'Escape') document.location.hash = '';
    });
    
    this._sidenav?.addEventListener('transitionend', e => {
      const isOpen = document.location.hash === '#sidenav-open';
      const a = isOpen
          ? this.renderRoot?.querySelector('#sidenav-close')
          : this.renderRoot?.querySelector('#sidenav-button');
      if (a) (a as HTMLElement).focus();
    });
  }

  render() {
    return html`
    <header role='banner'>
      <a href='#sidenav-open' id='sidenav-button' title='Open Menu' aria-label='Open Menu'>Open</a>
      <a href='#' id='sidenav-close' class='hamburger' title='Close Menu' aria-label='Close Menu' onchange="history.go(-1)">Close</a>
      <nav id='sidenav-open'>
        <slot />
      </nav>
    </header>
    `;
  }
}
