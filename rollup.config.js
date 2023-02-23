import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
    }),
    commonjs(),
    esbuild(),
    alias({
      entries: [
        { find: '~/atoms', replacement: './../src/components/atoms' },
        { find: '~/interfaces', replacement: './../src/interfaces.ts' },
        { find: '~/themes', replacement: './../src/themes' },
        { find: '~/types', replacement: './../src/types' },
      ],
    }),
  ],
};
