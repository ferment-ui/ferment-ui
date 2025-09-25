import { rules } from 'ttls-helpers';

export default rules((value) => `.lh-${value}`, ['0', '1ch', '1em', '1rem'], 'line-height');