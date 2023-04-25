import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import eslint from '@rollup/plugin-eslint';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/index.ts',
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript(),
      json(),
      eslint(),
      babel({
        babelHelpers: 'runtime'
      }),
      terser()
    ],
    output: [
      {
        file: 'dist/f-utils.umd.js',
        format: 'umd',
        name: 'fUtils', // format格式为umd的时候必须设置，将作为全部变量挂在window下
        exports: 'named'
      },
      {
        file: 'dist/f-utils.esm.js',
        format: 'es',
        exports: 'named'
      },
      {
        file: 'dist/f-utils.cjs.js',
        format: 'cjs',
        exports: 'named'
      }
    ]
  }
];
