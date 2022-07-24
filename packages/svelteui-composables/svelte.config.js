import mm from 'micromatch';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { configDefaults } from 'vitest/config';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		package: {
			exports: (filepath) => {
				if (filepath.endsWith('.d.ts')) return false;
				return !mm.contains(filepath, '**_');
			},
			files: mm.matcher('!**/*.test.{ts, js}')
		},
		/** @type {import('vite').UserConfig} */
		vite: {
			server: process.env.VITEST
				? {}
				: {
						fs: {
							allow: ['./package']
						}
				  },
			test: {
				globals: true,
				environment: 'jsdom',
				coverage: {
					exclude: [...configDefaults.exclude, 'svelte.config.js', '**/test/**']
				}
			}
		}
	}
};

export default config;
