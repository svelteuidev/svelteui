import preprocess from 'svelte-preprocess';
import fs from 'fs';
export const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess()],
	compilerOptions: {
		generate: 'ssr',
		hydratable: true
	},
	kit: {
		files: {
			lib: 'src'
		}
	}
};

export default config;
