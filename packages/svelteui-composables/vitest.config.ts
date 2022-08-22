import { configDefaults, defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
	test: {
		environment: 'jsdom',
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
			$clib: path.join(__dirname, './src')
		}
	}
});
