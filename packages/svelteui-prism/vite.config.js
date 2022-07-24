import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	deps: {
		inline: ['radix-icons-svelte']
	},
	optimizeDeps: {
		exclude: ['radix-icons-svelte']
	},
	test: {
		globals: true,
		environment: 'jsdom'
	}
};

export default config;
