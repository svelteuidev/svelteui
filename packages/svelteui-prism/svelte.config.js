import mm from 'micromatch';
import preprocess from 'svelte-preprocess';
import fs from 'fs';
export const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	compilerOptions: {
		generate: 'ssr',
		hydratable: true
	},
  package: {
    exports: (filepath) => {
      if (filepath.endsWith('.d.ts')) return false;
      return !mm.contains(filepath, '**_');
    },
    files: mm.matcher('!**/*.test.{ts, js}')
  }
};

export default config;
