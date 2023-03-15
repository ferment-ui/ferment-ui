import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import {terser} from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-css-only";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "dist/index.js",
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({sourceMap: !production}),
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
        generate: "dom",
      },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({output: "bundle.css"}),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
    typescript({
      sourceMap: !production,
      inlineSources: !production,
    }),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  }
}
// },
// {
//   input: 'util.js',
//   output: {
//     format: 'umd',
//     name: 'DeclareCSS',
//     file: 'dist/utils.js'
//   },
//   plugins: [
//     production && terser()
//   ]
// }
// ]
