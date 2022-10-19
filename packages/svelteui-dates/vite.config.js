import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ['radix-icons-svelte']
	},
	resolve: {
		alias: {
			$dlib: './src'
		}
	}
};

export default config;
