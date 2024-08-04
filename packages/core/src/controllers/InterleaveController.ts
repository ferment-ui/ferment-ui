import { html, ReactiveController, TemplateResult, nothing, ReactiveElement } from 'lit';
import { ref, Ref, createRef } from 'lit/directives/ref.js';
import { debug } from '../scripts/debug.js';

export class InterleaveController implements ReactiveController {
  #node: Node | TemplateResult;
  #slotRefs: Ref<HTMLSlotElement>[] = [];

  constructor(public host: ReactiveElement, node: Node | TemplateResult) {
    this.#node = node;
    host.addController(this);
  }

  renderables() {
    return Array.from(this.host.children).map(
      (_, index) => html`${index === 0 ? nothing : this.#node instanceof Node ? this.#node.cloneNode(true) : this.#node}<slot ${ref(this.#slotRefs[index] ??= createRef())}></slot>`
    );
  }

  hostUpdated() {
    debug(this.host.children, this.#slotRefs);
    Array.from(this.host.children).forEach((child, index) => this.#slotRefs[index]?.value?.append(child));
  }
}

