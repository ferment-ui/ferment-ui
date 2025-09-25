import { rules } from 'ttls-helpers';

export default rules((value) => `.ta-${value}`, ['start', 'end', 'center', 'justify', 'initial'], 'text-align');