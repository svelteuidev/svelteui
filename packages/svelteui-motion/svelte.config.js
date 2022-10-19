import mm from 'micromatch';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	package: {
		exports: (filepath) => {
			if (filepath.endsWith('.d.ts')) return false;
			return !mm.contains(filepath, '**_');
		},
		files: mm.matcher('!**/*.test.{ts, js}')
	}
};

export default config;
