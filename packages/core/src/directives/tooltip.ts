import {Directive, directive, PartType } from 'lit/directive.js';
import type { PartInfo } from 'lit/directive.js';

class TooltipDirective extends Directive {
  constructor(partInfo: PartInfo) {
    super(partInfo);
    if (
      partInfo.type !== PartType.ELEMENT
    ) {
      throw new Error('The `tooltip` directive must be used on an Element, i.e. <div ${tooltip()}></div>');
    }
  }

  render() {
    return `Hello!`;
  }
}

export default directive(TooltipDirective);