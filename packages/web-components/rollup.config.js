import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from "@rollup/plugin-terser";
import replace from '@rollup/plugin-replace';

export const FILENAME = 'ferment-ui.js';

export default {
  input: 'dist/index.js',
  output: {
    file: `dist/${FILENAME}`,
    format: 'iife',
    name: 'FermentUI'
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({preventAssignment: true, 'Reflect.decorate': 'undefined'}),
    nodeResolve(),
    commonjs(),
    process.env.NODE_ENV === 'production' && terser()
  ]
};
