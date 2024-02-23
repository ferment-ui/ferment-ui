import { html, ReactiveController, TemplateResult, nothing, ReactiveElement } from 'lit';
import { ref, Ref, createRef } from 'lit/directives/ref.js';
import { Logger } from './LoggerController';

export class InterleaveController implements ReactiveController {
  #logger: Logger;
  #node: Node | TemplateResult;
  #slotRefs: Ref<HTMLSlotElement>[] = [];

  constructor(public host: ReactiveElement, node: Node | TemplateResult) {
    this.#logger = new Logger(host);
    Logger.debugLog();
    this.#node = node;
    host.addController(this);
  }

  renderables() {
    return Array.from(this.host.children).map(
      (_, index) => html`${index === 0 ? nothing : this.#node instanceof Node ? this.#node.cloneNode(true) : this.#node}<slot ${ref(this.#slotRefs[index] ??= createRef())}></slot>`
    );
  }

  hostUpdated() {
    this.#logger.log(this.host.children, this.#slotRefs);
    Array.from(this.host.children).forEach((child, index) => this.#slotRefs[index]?.value?.append(child));
  }
}

