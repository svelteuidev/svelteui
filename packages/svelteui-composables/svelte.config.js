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
	}
};

export default config;
