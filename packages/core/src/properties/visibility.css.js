import { rules } from 'ttls-helpers';

export default rules((value) => `.v-${value}`, ['visible', 'hidden', 'collapse'], 'visibility');