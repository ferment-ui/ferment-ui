import { ReactiveController } from 'lit';
import type { ReactiveControllerHost } from 'lit';
import { autoPlacement, computePosition, offset } from '@floating-ui/dom';
import type { AutoUpdateOptions, ComputePositionConfig } from '@floating-ui/dom';
import { debug } from '../scripts/debug.js';

const enterEvents = ['pointerenter', 'focus'];
const leaveEvents = ['pointerleave', 'blur', 'keydown', 'click'];

export class PopupController implements ReactiveController {
  #host: HTMLElement;
  target: HTMLElement;
  arrow: HTMLElement | null;
  computePositionConfig?: ComputePositionConfig;
  autoUpdateOptions?: AutoUpdateOptions;

  constructor(host: ReactiveControllerHost, target: HTMLElement, computePositionConfig?: ComputePositionConfig, autoUpdateOptions?: AutoUpdateOptions) {
    debug('PopupController', arguments);
    this.#host = host as unknown as HTMLElement;
    this.target = target;
    this.arrow = null;
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
  }

  show = () => {
    debug('PopupController#show');
    
    const host = this.#host;
    host.style.display = 'inline-block';
    computePosition(this.target, host, this.computePositionConfig).then(({x, y, placement, middlewareData}) => {
      debug('PopupController#show', {x, y, placement, middlewareData});

      Object.assign(host.style, {
        left: `${x}px`,
        top: `${y}px`,
      });

      if (this.arrow) {
        // const staticSide = {
        //   top: 'bottom',
        //   right: 'left',
        //   bottom: 'top',
        //   left: 'right',
        // }[placement.split('-')[0]];

        // Object.assign(arrowElement.style, {
        //   left: arrowX != null ? `${arrowX}px` : '',
        //   top: arrowY != null ? `${arrowY}px` : '',
        //   right: '',
        //   bottom: '',
        //   [staticSide]: '-4px',
        // });
      }
    });
  }

  hide = () => {
    debug('PopupController#hide');

    this.#host.style.display = 'none';
  }
}