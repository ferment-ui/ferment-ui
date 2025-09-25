import { variable } from 'ttls-helpers';
import { breakpoints } from '../breakpoints.js';

const entries = Object.entries(breakpoints);

export default /*css*/`
@custom-media --x${entries[0][0]} (width < ${entries[0][1]});
${entries.slice(0, -1).map(([key, value], index) => `@custom-media --${key} (${value} <= width < ${entries[index + 1][1]});`).join('\n')}
@custom-media --${entries.at(-1)[0]} (width >= ${entries.at(-1)[1]});

:root {
${entries.map(([name, value]) => variable(`breakpoint-${name}`, value)).join('\n')}
}`;

