import { html, css, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { mod } from '../../utils.js';

@customElement(`fui-tabs`)
export class FUITabs extends LitElement {
  static override styles = css`
    .tabs {
      display: flex;
      flex-direction: row;
      border: 1px solid black;
    }

    .panels {
      border-right: 1px solid black;
      border-bottom: 1px solid black;
      border-left: 1px solid black;
    }

    ::slotted([slot="tab"]) {
      flex: 1 0 auto;
      text-align: center;
      border-right: 1px solid black;
    }

    ::slotted([slot="panel"]) {
      display: none;
    }

    ::slotted([slot="panel"].selected) {
      display: block;
    }

    fui-tabs [slot=tab] {
      border-right: 1px solid black;
    }
    
    fui-tabs [slot=tab]:focus {
      outline: 5px solid blue;
    }
    
    fui-tabs [slot=tab]:last-of-type {
      border-right: none;
    }
    
    /* this is to have it show up as header/section until the component loads */
    fui-tabs:not(:defined) {
      display: block;
    }
  `;

  @property({type: Number})
  selectedIndex = 0;

  @property({type: Boolean})
  cycle = false;

  get _tabWrapper(): HTMLElement {
    return this.shadowRoot?.querySelector(".tabs") as HTMLElement;
  }

  get _panelWrapper(): HTMLElement {
    return this.shadowRoot?.querySelector(".panels") as HTMLElement;
  }

  get _tabs(): Array<HTMLElement> {
    return (
      this.shadowRoot?.querySelector("slot[name=tab]") as HTMLSlotElement
    )?.assignedElements() as HTMLElement[];
  }

  get _panels(): Array<HTMLElement> {
    return (
      this.shadowRoot?.querySelector("slot[name=panel]") as HTMLSlotElement
    )?.assignedElements() as HTMLElement[];
  }

  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    root.addEventListener("keydown", this._onKeyDown);
    return root;
  }

  private _upgradeElements(): void {
    console.debug("_upgradeElements");
    this._tabs?.forEach((tab) => {
      if (tab != null) tab.setAttribute("role", "tab");
    });
    this._panels?.forEach((panel) => {
      if (panel != null) panel.setAttribute("role", "tabpanel");
    });
  }

  private _linkPanels(): void {
    console.debug("_linkPanels");
    this._tabs?.forEach((tab, index) => {
      if (tab != null) {
        tab.id = tab?.id || `${this.id}-tab-${index}`;

        const panel = tab.nextElementSibling;

        if (panel != null) {
          panel.id = panel?.id || `${this.id}-panel-${index}`;

          tab.setAttribute("aria-controls", panel.id);
          panel.setAttribute("aria-labelledby", tab.id);
        }
      }
    });
  }

  private _setSelectedIndex(index: number): void {
    console.debug("_setSelectedIndex", index);
    this._tabs?.forEach((tab, i) => {
      const panel = this._panels[i];
      if (index == i) {
        tab.setAttribute("aria-selected", "true");
        tab.tabIndex = 0;
        panel.classList.add("selected");
        panel.tabIndex = -1;
      } else {
        tab.setAttribute("aria-selected", "");
        tab.tabIndex = -1;
        panel.classList.remove("selected");
        panel.tabIndex = -2;
      }
    });

    this._focusSelected();
  }

  private _focusSelected() {
    console.debug("_focusSelected", this.selectedIndex);
    this._tabs[this.selectedIndex].focus();
  }

  private _onClick = (event: MouseEvent) => {
    console.debug("_onClick");
    console.debug(event.target);
    const index = this._tabs.findIndex((tab) => tab == event.target);
    console.debug(index);
    if (index >= 0) {
      this.selectedIndex = index;
      this._setSelectedIndex(this.selectedIndex);
    }
  };

  private _onKeyDown = (event: Event) => {
    console.debug("_onKeyDown");
    console.debug(event.target);
    const length = this._tabs.length;
    const key = (event as KeyboardEvent).key;
    const target = event.target as HTMLElement;

    if (target.matches('[slot=tab]')) {
      switch (key) {
        case "ArrowLeft":
        case "ArrowRight":
          const dir = key === "ArrowLeft" ? -1 : 1;
          console.debug(this.selectedIndex, dir);
          const current = this.selectedIndex + dir;
          this.selectedIndex = this.cycle
            ? mod(current, length)
            : dir == 1
            ? Math.min(length - 1, current)
            : Math.max(0, current);
          break;

        case "End":
          this.selectedIndex = length - 1;
          break;

        case "Home":
          this.selectedIndex = 0;
          break;

        case "ArrowDown":
          (
            this._tabs[this.selectedIndex].nextElementSibling as HTMLElement
          )?.focus();
          return;

        default:
          return;
      }
    }

    else if (target.matches('[slot=panel]')) {
      if (key === "ArrowUp") {
        this._tabs[this.selectedIndex].focus();
      }
      return;
    }

    console.debug(this.selectedIndex);
    this._setSelectedIndex(this.selectedIndex);
  };

  protected override firstUpdated(
    _changedProperties: PropertyValues<any>
  ): void {
    this._upgradeElements();
    this._linkPanels();
    this._setSelectedIndex(0);
  }

  override render() {
    return html`
      <div class="tabs" @click=${this._onClick} part="tabs">
        <slot name="tab"></slot>
      </div>
      <div class="panels" part="tab-panels">
        <slot name="panel"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-tabs': FUITabs;
  }
}