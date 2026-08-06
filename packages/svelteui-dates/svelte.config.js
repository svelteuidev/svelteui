import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import preprocess from 'svelte-preprocess';
import fs from 'fs';
import path from 'path';
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
		},
		alias: {
			$dlib: path.resolve('./src'),
			'@stitches/core/*': path.resolve('../../node_modules/@stitches/core/*')
		}
	}
};

export default config;
