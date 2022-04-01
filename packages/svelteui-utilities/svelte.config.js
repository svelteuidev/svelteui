import mm from 'micromatch';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import preprocess from 'svelte-preprocess';
import { configDefaults } from 'vitest/config';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			plugins: [autoprefixer(), cssnano()]
		}
	}),

	kit: {
		package: {
			exports: (filepath) => {
				if (filepath.endsWith('.d.ts')) return false;
				return !mm.contains(filepath, '**_');
			},
			files: mm.matcher('!**/*.test.{ts, js}')
		},
		/** @type {import('vite').UserConfig} */
		vite: {
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
