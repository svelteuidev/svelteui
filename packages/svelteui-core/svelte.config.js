import preprocess from 'svelte-preprocess';
import mm from 'micromatch';
import fs from 'fs';
import { searchForWorkspaceRoot } from 'vite';
export const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		files: {
			lib: 'src'
		},
		package: {
			exports: (filepath) => {
				if (filepath.endsWith('.d.ts')) return false;
				if (filepath.endsWith('.config.js')) return false;
				if (mm.contains(filepath, 'internal/**')) return false;
				if (mm.contains(filepath, 'styles/**')) return false;
				return !mm.contains(filepath, '**_');
			},
			files: mm.matcher('!**/*.test.{ts, js}')
		},
		vite: {
			optimizeDeps: {
				exclude: ['radix-icons-svelte']
			},
			test: {
				globals: true,
				environment: 'jsdom',
				deps: {
					inline: ['radix-icons-svelte']
				}
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
