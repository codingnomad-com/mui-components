import { build } from 'esbuild';

const shared = {
  entryPoints: ['src/index.ts'],
  bundle: true,
};

build({
  ...shared,
  outfile: 'dist/index.js',
});

build({
  ...shared,
  outfile: 'dist/index.esm.js',
  format: 'esm',
});

//     "build:es": "esbuild src/index.ts --loader:.svg=file --loader:.png=file --bundle --outfile=dist/bundle.js",
