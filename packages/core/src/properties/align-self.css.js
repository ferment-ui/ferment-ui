import { rules } from 'ttls-helpers';

export default rules((value) => `.as-${value}`, ['start', 'center', 'end', 'stretch', 'baseline'], 'align-self');