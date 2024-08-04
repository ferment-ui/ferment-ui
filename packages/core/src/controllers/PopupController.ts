import { ReactiveController } from 'lit';
import type { ReactiveControllerHost } from 'lit';
import { autoPlacement, autoUpdate, computePosition, offset } from '@floating-ui/dom';
import type { AutoUpdateOptions, ComputePositionConfig } from '@floating-ui/dom';
import { debug } from '../scripts/debug.js';

const enterEvents = ['pointerenter', 'focus'];
const leaveEvents = ['pointerleave', 'blur', 'keydown', 'click'];

export class PopupController implements ReactiveController {
  #host: HTMLElement;
  target: HTMLElement;
  computePositionConfig?: ComputePositionConfig;
  autoUpdateOptions?: AutoUpdateOptions;
  #cleanup = () => {};

  constructor(host: ReactiveControllerHost, target: HTMLElement, computePositionConfig?: ComputePositionConfig, autoUpdateOptions?: AutoUpdateOptions) {
    debug('PopupController', arguments);
    this.#host = host as unknown as HTMLElement;
    this.target = target;
    this.computePositionConfig = computePositionConfig ?? {
      placement: 'top-start',
      middleware: [offset(40), autoPlacement()],
    };
    this.autoUpdateOptions = autoUpdateOptions;
    host.addController(this);
  }

  hostConnected(): void {
    debug('PopupController#hostConnected');

    this.hide();

    enterEvents.forEach((event) => {
      this.target.addEventListener(event, this.show);
    });

    leaveEvents.forEach((event) => {
      this.target.addEventListener(event, this.hide);
    });
  }

  hostDisconnected(): void {
    debug('PopupController#hostDisconnected');

    enterEvents.forEach((event) => {
      this.target.removeEventListener(event, this.show);
    });

    leaveEvents.forEach((event) => {
      this.target.removeEventListener(event, this.hide);
    });

    this.#cleanup();
  }

  show = () => {
    debug('PopupController#show');
    
    const host = this.#host;
    host.style.display = 'inline-block';
    computePosition(this.target, host, {
      middleware: [offset(10)],
    }).then(({x, y}) => {
      Object.assign(host.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  hide = () => {
    debug('PopupController#hide');

    this.#host.style.display = 'none';
    this.#cleanup();
  }
}