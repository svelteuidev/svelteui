import mm from 'micromatch';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import preprocess from 'svelte-preprocess';
import fs from 'fs';
export const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			plugins: [autoprefixer(), cssnano()]
		}
	}),
	kit: {
		files: {
			lib: 'src'
		}
	},
	package: {
		exports: (filepath) => {
			if (filepath.endsWith('.d.ts')) return false;
			if (filepath.endsWith('.config.js')) return false;
			if (mm.contains(filepath, 'internal/**')) return false;
			if (mm.contains(filepath, 'styles/**')) return false;
			return !mm.contains(filepath, '**_');
		},
		files: mm.matcher('!**/*.test.{ts, js}')
	}
};

export default config;
