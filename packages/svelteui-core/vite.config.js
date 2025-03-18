import { searchForWorkspaceRoot } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { svelteTesting } from '@testing-library/svelte/vite';

/** @type {import('vite').UserConfig} */
const config = defineConfig({
	plugins: [sveltekit(), svelteTesting()],
	optimizeDeps: {
		exclude: ['radix-icons-svelte']
	},
	server: {
		fs: {
			allow: [
				// search up for workspace root
				searchForWorkspaceRoot(process.cwd()),
				// your custom rules
				'/stitches.config.ts'
			]
		}
	},
	resolve: process.env.VITEST
		? {
				conditions: ['browser']
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
