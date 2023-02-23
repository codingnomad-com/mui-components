import esbuild from 'esbuild';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const dist = join(process.cwd(), 'dist');

if (!existsSync(dist)) {
  mkdirSync(dist);
}

// esm output bundles with code splitting
esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.esm.js',
    bundle: true,
    sourcemap: true,
    minify: true,
    format: 'esm',
    define: { global: 'window' },
    target: ['esnext'],
  })
  .catch(() => process.exit(1));

// cjs output bundle
esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.cjs.js',
    bundle: true,
    sourcemap: true,
    minify: true,
    platform: 'node',
    target: ['node16'],
  })
  .catch(() => process.exit(1));

// an entry file for cjs at the root of the bundle
writeFileSync(join(dist, 'index.js'), "export * from './esm/index.js';");

// an entry file for esm at the root of the bundle
writeFileSync(
  join(dist, 'index.cjs.js'),
  "module.exports = require('./cjs/index.cjs.js');",
);
