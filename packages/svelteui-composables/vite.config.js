import { sveltekit } from '@sveltejs/kit/vite';

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
			$clib: './src'
		}
	}
};

export default config;
