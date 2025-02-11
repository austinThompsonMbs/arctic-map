import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  inlineDynamicImports: true,
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    },
    {
      file: pkg.example,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.examplemodule,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
   
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({ babelHelpers: 'bundled' }),
    resolve(),
    commonjs()
  ]

}
