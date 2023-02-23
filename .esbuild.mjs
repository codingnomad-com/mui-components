import { build } from 'esbuild';
// import esbuldNamedExportsPlugin from 'esbuild-plugin-named-exports';

const shared = {
  bundle: true,
  entryPoints: ['src/index.ts'],
  // plugins: [esbuldNamedExportsPlugin],
  target: 'es6',
};

build({
  ...shared,
  outfile: 'dist/index.js',
});

build({
  ...shared,
  format: 'esm',
  outfile: 'dist/index.esm.js',
});

//     "build": "yarn build:es && yarn compile:ts",
