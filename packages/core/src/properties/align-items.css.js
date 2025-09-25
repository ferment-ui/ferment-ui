import { rules } from 'ttls-helpers';

export default rules((value) => `.ai-${value}`, ['start', 'center', 'end', 'stretch', 'baseline'], 'align-items');