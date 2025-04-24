// See: https://rollupjs.org/introduction/

import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'

const config = {
  input: 'src/index.ts',
  output: {
    esModule: false,
    file: 'dist/index.js',
    format: 'csj',
    sourcemap: true
  },
  plugins: [
    typescript(),
    json(),
    nodeResolve({ preferBuiltins: true }),
    commonjs()
  ]
}

export default config
