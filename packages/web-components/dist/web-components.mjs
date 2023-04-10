import { css as b, unsafeCSS as a, LitElement as u, html as p } from "lit";
import { property as h, customElement as f } from "lit/decorators.js";
const d = "dc";
function x(t, e) {
  return (t % e + e) % e;
}
var _ = Object.defineProperty, g = Object.getOwnPropertyDescriptor, c = (t, e, s, l) => {
  for (var o = l > 1 ? void 0 : l ? g(e, s) : e, n = t.length - 1, r; n >= 0; n--)
    (r = t[n]) && (o = (l ? r(e, s, o) : r(o)) || o);
  return l && o && _(e, s, o), o;
};
let i = class extends u {
  constructor() {
    super(...arguments), this.selectedIndex = 0, this.cycle = !1, this._onClick = (t) => {
      console.debug("_onClick"), console.debug(t.target);
      const e = this._tabs.findIndex((s) => s == t.target);
      console.debug(e), e >= 0 && (this.selectedIndex = e, this._setSelectedIndex(this.selectedIndex));
    }, this._onKeyDown = (t) => {
      var o;
      console.debug("_onKeyDown"), console.debug(t.target);
      const e = this._tabs.length, s = t.key, l = t.target;
      if (l.matches("[slot=tab]"))
        switch (s) {
          case "ArrowLeft":
          case "ArrowRight":
            const n = s === "ArrowLeft" ? -1 : 1;
            console.debug(this.selectedIndex, n);
            const r = this.selectedIndex + n;
            this.selectedIndex = this.cycle ? x(r, e) : n == 1 ? Math.min(e - 1, r) : Math.max(0, r);
            break;
          case "End":
            this.selectedIndex = e - 1;
            break;
          case "Home":
            this.selectedIndex = 0;
            break;
          case "ArrowDown":
            (o = this._tabs[this.selectedIndex].nextElementSibling) == null || o.focus();
            return;
          default:
            return;
        }
      else if (l.matches("[slot=panel]")) {
        s === "ArrowUp" && this._tabs[this.selectedIndex].focus();
        return;
      }
      console.debug(this.selectedIndex), this._setSelectedIndex(this.selectedIndex);
    };
  }
  get _tabWrapper() {
    var t;
    return (t = this.shadowRoot) == null ? void 0 : t.querySelector(".tabs");
  }
  get _panelWrapper() {
    var t;
    return (t = this.shadowRoot) == null ? void 0 : t.querySelector(".panels");
  }
  get _tabs() {
    var t, e;
    return (e = (t = this.shadowRoot) == null ? void 0 : t.querySelector("slot[name=tab]")) == null ? void 0 : e.assignedElements();
  }
  get _panels() {
    var t, e;
    return (e = (t = this.shadowRoot) == null ? void 0 : t.querySelector("slot[name=panel]")) == null ? void 0 : e.assignedElements();
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return t.addEventListener("keydown", this._onKeyDown), t;
  }
  _upgradeElements() {
    var t, e;
    console.debug("_upgradeElements"), (t = this._tabs) == null || t.forEach((s) => {
      s != null && s.setAttribute("role", "tab");
    }), (e = this._panels) == null || e.forEach((s) => {
      s != null && s.setAttribute("role", "tabpanel");
    });
  }
  _linkPanels() {
    var t;
    console.debug("_linkPanels"), (t = this._tabs) == null || t.forEach((e, s) => {
      if (e != null) {
        e.id = (e == null ? void 0 : e.id) || `${this.id}-tab-${s}`;
        const l = e.nextElementSibling;
        l != null && (l.id = (l == null ? void 0 : l.id) || `${this.id}-panel-${s}`, e.setAttribute("aria-controls", l.id), l.setAttribute("aria-labelledby", e.id));
      }
    });
  }
  _setSelectedIndex(t) {
    var e;
    console.debug("_setSelectedIndex", t), (e = this._tabs) == null || e.forEach((s, l) => {
      const o = this._panels[l];
      t == l ? (s.setAttribute("aria-selected", "true"), s.tabIndex = 0, o.classList.add("selected"), o.tabIndex = -1) : (s.setAttribute("aria-selected", ""), s.tabIndex = -1, o.classList.remove("selected"), o.tabIndex = -2);
    }), this._focusSelected();
  }
  _focusSelected() {
    console.debug("_focusSelected", this.selectedIndex), this._tabs[this.selectedIndex].focus();
  }
  firstUpdated(t) {
    this._upgradeElements(), this._linkPanels(), this._setSelectedIndex(0);
  }
  render() {
    return p`
      <div class="tabs" @click=${this._onClick} part="tabs">
        <slot name="tab"></slot>
      </div>
      <div class="panels" part="tab-panels">
        <slot name="panel"></slot>
      </div>
    `;
  }
};
i.styles = b`
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

    ${a(d)}-tabs [slot=tab] {
      border-right: 1px solid black;
    }
    
    ${a(d)}-tabs [slot=tab]:focus {
      outline: 5px solid blue;
    }
    
    ${a(d)}-tabs [slot=tab]:last-of-type {
      border-right: none;
    }
    
    /* this is to have it show up as header/section until the component loads */
    ${a(d)}-tabs:not(:defined) {
      display: block;
    }
  `;
c([
  h({ type: Number })
], i.prototype, "selectedIndex", 2);
c([
  h({ type: Boolean })
], i.prototype, "cycle", 2);
i = c([
  f(`${d}-tabs`)
], i);
export {
  i as DCTabs
};
