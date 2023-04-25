import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import eslint from '@rollup/plugin-eslint';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
// import packageJson from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: {
      // file: packageJson.browser,
      file: 'dist/f-utils.umd.js',
      format: 'umd',
      name:'f-utils'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript(),
      json(),
      eslint(),
      babel(),
      terser()
    ]
  },
  /*{
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'es'
      },
      {
        file: packageJson.main,
        format: 'cjs'
      }
    ]
  }*/
];
