import { configDefaults, defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
	test: {
		environment: 'jsdom',
		root: '.',
		deps: {
			inline: ['radix-icons-svelte']
		},
		coverage: {
			exclude: [...configDefaults.exclude, 'svelte.config.js', '**/test/**']
		}
	},
	plugins: [
		svelte({
			hot: false,
			configFile: path.join(__dirname, 'svelte.config.js')
		})
	],
	resolve: {
		alias: {
			$lib: path.join(__dirname, './src'),
			$clib: path.join(__dirname, '../svelteui-composables/src'),
			'@svelteuidev/composables': path.join(__dirname, '../svelteui-composables/src'),
			'@svelteuidev/tests': path.join(__dirname, '../svelteui-tests/src/lib')
		}
	}
});
