import mm from 'micromatch';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		files: {
			lib: 'src'
		},
		alias: {
			$clib: path.resolve('./src')
		}
	},
	package: {
		exports: (filepath) => {
			if (filepath.endsWith('.d.ts')) return false;
			return !mm.contains(filepath, '**_');
		},
		files: (filepath) => {
			const isNotTest = mm.matcher('!**/*.test.{ts, js}');
			const isNotStory = mm.matcher('!**/*.stories.svelte');
			return isNotTest(filepath) && isNotStory(filepath);
		}
	}
};

export default config;
