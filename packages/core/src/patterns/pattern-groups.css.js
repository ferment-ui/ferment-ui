import { _var, _ref, groupMappings } from '../utils.js';

export const patternGroupDeclarations = {
  tag: [{
    scale: _var('tag-scale'),
    inlineScale: _var('tag-inline-scale'),
    paddingBlock: _var('tag-padding-block'),
    border: _var('tag-border'),
    boxShadow: _var('tag-box-shadow'),
    breakpoint: 'sm'
  }],
  control: {
    scale: _var('control-scale'),
    inlineScale: _var('control-inline-scale'),
    paddingBlock: _var('control-padding-block'),
    border: _var('control-border'),
    boxShadow: _var('control-box-shadow')
  },
  panel: {
    scale: _var('panel-scale'),
    inlineScale: _var('panel-inline-scale'),
    paddingBlock: _var('panel-padding-block'),
    border: _var('panel-border'),
    boxShadow: _var('panel-box-shadow')
  }
}

export default /*css*/`
@container viewport (min-width: 500px) {
  .tag, ${groupMappings.tag.map(tag => `.${tag}`).join(', ')} {
    padding-block: ${_ref('tag-padding-block')};
    padding-inline: calc(${_ref('tag-padding-block')} * ${_ref('tag-inline-scale')});
    border-radius: ${_ref('tag-border')};
    box-shadow: ${_ref('tag-box-shadow')};
  }

  .control, ${groupMappings.control.map(tag => `.${tag}`).join(', ')} {
    padding-block: ${_ref('control-padding-block')};
    padding-inline: calc(${_ref('control-padding-block')} * ${_ref('control-inline-scale')});
    border-radius: ${_ref('control-border')};
    box-shadow: ${_ref('control-box-shadow')};
    min-inline-size: ${_ref('tappable.minSize')};
    min-block-size: ${_ref('tappable.minSize')};
  }

  .panel, ${groupMappings.panel.map(tag => `.${tag}`).join(', ')} {
    padding-block: ${_ref('panel-padding-block')};
    padding-inline: calc(${_ref('panel-padding-block')} * ${_ref('panel-inline-scale')});
    border-radius: ${_ref('panel-border')};
    box-shadow: ${_ref('panel-box-shadow')};
  }

  .area, ${groupMappings.area.map(tag => `.${tag}`).join(', ')} {
    padding-block: ${_ref('area-padding-block')};
    padding-inline: calc(${_ref('area-padding-block')} * ${_ref('area-inline-scale')});
    border-radius: ${_ref('area-border')};
    box-shadow: ${_ref('area-box-shadow')};
  }
}`;
