import adapter from 'svelte-adapter-github';
import { kitDocsPlugin } from '@svelteness/kit-docs/node';
import Icons from 'unplugin-icons/vite';
import preprocess from 'svelte-preprocess';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '/localhost:3000' : '/svelteui'
		},

		prerender: {
			default: true,
			entries: ['*'],
			onError: ({ status, path, referrer, referenceType }) => {
				console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
			}
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
