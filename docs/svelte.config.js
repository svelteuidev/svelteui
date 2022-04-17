import adapter from '@sveltejs/adapter-auto';
import { kitDocsPlugin } from '@svelteness/kit-docs/node';
import Icons from 'unplugin-icons/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		prerender: {
			default: true,
			entries: ['*']
		},

		vite: {
			build: {
				rollupOptions: {
					external: ['@docsearch/js']
				}
			},
			plugins: [
				Icons({ compiler: 'svelte' }),
				kitDocsPlugin({
					shiki: {
						theme: 'material-ocean'
					}
				})
			]
		}
	}
};

export default config;
