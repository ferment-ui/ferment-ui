import { rules } from 'ttls-helpers';

export default rules((value) => `.jc-${value}`, ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly', 'stretch', 'baseline'], 'justify-content');