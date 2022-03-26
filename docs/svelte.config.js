import { mdsvex } from 'mdsvex';
import path from 'path';
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import slug from 'rehype-slug';
import sveld from 'vite-plugin-sveld';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: {
				plugins: [autoprefixer(), cssnano()]
			}
		}),
		mdsvex({
			extensions: ['.svx', '.md'],
			rehypePlugins: [slug]
		})
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
			plugins: [sveld()],
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
