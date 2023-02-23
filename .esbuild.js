import { build } from 'esbuild';
import packageJson from './package.json' assert { type: 'json' };

const entryFile = 'src/index.ts';

const shared = {
  bundle: true,
  entryPoints: [entryFile],
  // Treat all dependencies in package.json as externals to keep bundle size to a minimum
  external: Object.keys(packageJson.dependencies),
  logLevel: 'info',
  minify: true,
  sourcemap: true,
};

build({
  ...shared,
  outfile: './dist/index.js',
  target: ['esnext', 'node12.22.0'],
});

build({
  ...shared,
  format: 'esm',
  outfile: './dist/index.esm.js',
  target: ['esnext', 'node12.22.0'],
});

build({
  ...shared,
  format: 'cjs',
  outfile: './dist/index.cjs.js',
  target: ['esnext', 'node12.22.0'],
});
