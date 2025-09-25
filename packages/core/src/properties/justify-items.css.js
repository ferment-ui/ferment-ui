import { rules } from 'ttls-helpers';

export default rules((value) => `.ji-${value}`, ['start', 'center', 'end', 'stretch', 'baseline'], 'justify-items');