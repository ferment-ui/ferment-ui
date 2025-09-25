import { base } from '../../html-utils.js';

export default (attrs, children, options) => base(
  { ...attrs, role: 'switch', 'aria-labelledby': attrs.id, onclick: "this.ariaChecked = this.ariaChecked === 'false';" }, 
  children ?? /*html*/`<span>On</span><span>Off</span>`, 
  { tag: 'button', ...options }
);

export const i18n = {
  'en': {
    'switch.on': 'On',
    'switch.off': 'Off'
  },
  'es': {
    'switch.on': 'Encendido',
    'switch.off': 'Apagado'
  },
  'fr': {
    'switch.on': 'Activé',
    'switch.off': 'Désactivé'
  }
}

export function init() {
  [...document.querySelectorAll('[role=switch]')].forEach(switchEl => {
    switchEl.addEventListener('click', () => {
      switchEl.ariaChecked = switchEl.ariaChecked === 'false';
    });
  });
}