import preprocess from 'svelte-preprocess';
import mm from 'micromatch';
import fs from 'fs';
export const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		files: {
			lib: 'src'
		}
	},
	package: {
		exports: (filepath) => {
			if (filepath.endsWith('.d.ts')) return false;
			if (filepath.endsWith('.stories.svelte')) return false;
			if (filepath.endsWith('.config.js')) return false;
			if (filepath.endsWith('.test.ts')) return false;
			if (mm.contains(filepath, 'internal/**')) return false;
			if (mm.contains(filepath, 'styles/**')) return false;
			return !mm.contains(filepath, '**_');
		},
		files: (filepath) => {
      const isNotTest = mm.matcher('!**/*.test.{ts, js}');
      const isNotStory = mm.matcher('!**/*.stories.svelte');
      return isNotTest(filepath) && isNotStory(filepath);
    }
	}
};

export default config;
