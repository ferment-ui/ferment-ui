import { rules } from 'ttls-helpers';

export default rules((value) => `.ac-${value}`, ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly', 'stretch'], 'align-content');