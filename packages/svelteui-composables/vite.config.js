import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { svelteTesting } from '@testing-library/svelte/vite';

/** @type {import('vite').UserConfig} */
const config = defineConfig({
	plugins: [sveltekit(), svelteTesting()],
	server: process.env.VITEST
		? {}
		: {
				fs: {
					allow: ['./package']
				}
			},
	resolve: process.env.VITEST
		? {
				conditions: ['browser'],
				alias: {
					$clib: './src'
				}
			}
		: undefined,
	test: {
		environment: 'jsdom',
		include: './src/**/*.{test,spec}.ts',
		coverage: {
			exclude: ['svelte.config.js', '**/test/**']
		}
	}
});

export default config;
