// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import typescript from '@rollup/plugin-typescript';
// import url from '@rollup/plugin-url';
// import external from 'rollup-plugin-peer-deps-external';

// import pkg from './package.json' assert { type: 'json' };

// export default {
//   input: 'src/index.tsx',
//   output: [
//     {
//       file: pkg.main,
//       format: 'cjs',
//       exports: 'named',
//       sourcemap: true,
//     },
//     {
//       file: pkg.module,
//       format: 'esm',
//       exports: 'named',
//       sourcemap: true,
//     },
//   ],
//   plugins: [
//     external(),
//     url(),
//     resolve(),
//     typescript({
//       // rollupCommonJSResolveHack: true,
//       useTsconfigDeclarationDir: true,
//       // clean: true,
//     }),
//     commonjs(),
//   ],
// };

import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

import tsConfig from './tsconfig.json';

const config = [
  {
    input: 'index.ts',
    output: [
      {
        file: 'build/index.js',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        sourceMap: tsConfig.compilerOptions.sourceMap,
      }),
    ],
  },
  {
    input: 'build/index.d.ts',
    output: [
      {
        file: 'build/index.d.ts',
        format: 'es',
      },
    ],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: tsConfig.compilerOptions.baseUrl,
        },
      }),
    ],
  },
];

export default config;
