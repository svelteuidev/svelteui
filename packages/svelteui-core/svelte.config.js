import mm from 'micromatch';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import preprocess from 'svelte-preprocess';
import path from 'path';
import fs from 'fs';
export const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));
import { searchForWorkspaceRoot } from 'vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			plugins: [autoprefixer(), cssnano()]
		}
	}),
	compilerOptions: {
		generate: 'ssr',
		hydratable: true
	},
	kit: {
		package: {
			exports: (filepath) => {
				if (filepath.endsWith('.d.ts')) return false;
				if (filepath.endsWith('.config.js')) return false;
				return !mm.contains(filepath, '**_');
			},
			files: mm.matcher('!**/*.test.{ts, js}')
		},
		/** @type {import('vite').UserConfig} */
		vite: {
			resolve: {
				alias: {
					'@svelteuidev/errors': path.resolve('../svelteui-errors/dist')
				}
			},
			test: {
				globals: true,
				environment: 'jsdom'
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
			}
		}
	}
};

export default config;
