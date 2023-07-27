import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import babel from '@rollup/plugin-babel';

export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/ferment-ui.js',
    format: 'iife',
    name: 'FermentUI'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    // babel({
    //   babelHelpers: 'bundled',
    //   exclude: 'node_modules/**'
    // })
  ]
};
