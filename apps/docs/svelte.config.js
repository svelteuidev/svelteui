import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { mdsvex } from 'mdsvex';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),
		alias: {
			'@svelteuidev/core': path.resolve(__dirname, '../../packages/svelteui-core/package/index.js'),
      '@svelteuidev/composables': path.resolve(__dirname, '../../packages/svelteui-composables/package/index.js'),
      '@svelteuidev/motion': path.resolve(__dirname, '../../packages/svelteui-motion/package/index.js'),
      '@svelteuidev/prism': path.resolve(__dirname, '../../packages/svelteui-prism/package/index.js'),
			'@ui': './src/lib/theme/ui/index.js'
		}
	}
};

export default config;
