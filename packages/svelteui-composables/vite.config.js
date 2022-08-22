import { sveltekit } from '@sveltejs/kit/vite';
import { configDefaults } from 'vitest/config';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: process.env.VITEST
		? {}
		: {
				fs: {
					allow: ['./package']
				}
		  },
	resolve: {
		alias: {
			$clib: 'src'
		}
	},
	test: {
		environment: 'jsdom',
		coverage: {
			exclude: [...configDefaults.exclude, 'svelte.config.js', '**/test/**']
		}
	}
};

export default config;
