import { blockRule } from 'ttls-helpers';
import { _var } from '../utils.js';

export const tappableDeclarations = {
  'min-inline-size': _var('tappable-min-inline-size'),
  'min-block-size': _var('tappable-min-block-size'),
}

export default blockRule('.tappable', tappableDeclarations);