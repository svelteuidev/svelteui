import mdConfig from './mdsvex.config.js';
import examples from 'mdsvexamples/vite';
import path from 'path';
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import sveld from 'vite-plugin-sveld';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import tailwindcss from 'tailwindcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: {
				plugins: [tailwindcss(), autoprefixer(), cssnano()]
			}
		}),
		mdConfig
	],

	kit: {
		adapter: adapter(),
		prerender: {
			enabled: true
		},
		package: {
			exports: (file) => file === 'index.js'
		},
		vite: {
			plugins: [sveld(), examples],
			resolve: {
				alias: {
					$components: path.resolve('./src/components')
				}
			},
			server: {
				fs: {
					allow: ['.']
				}
			}
		}
	}
};

export default config;
