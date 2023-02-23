import { build } from 'esbuild';

const shared = {
  entryPoints: ['src/index.ts'],
  bundle: true,
};

build({
  ...shared,
  outfile: 'dist/index.js',
});
