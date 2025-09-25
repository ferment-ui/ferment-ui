import { rules } from 'ttls-helpers';

const zindexProperties = {
  '-1': -100,
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
};

export default rules((value) => `.zi-${value}`, Object.keys(zindexProperties), 'z-index');