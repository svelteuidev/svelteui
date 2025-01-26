import path from 'path';
import preprocess from 'svelte-preprocess';
import fs from 'fs';
export const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		files: {
			lib: 'src'
		},
		alias: {
			'@stitches/core/*': path.resolve('../../node_modules/@stitches/core/*')
		}
	},
	compilerOptions: {
		// Disables the error related to 'data-manual' attribute in the Prism component,
		// which is required to use Prism with no automatic highlight on import
		warningFilter: (warning) => {
			return (
				!warning.filename?.includes('Prism') && !warning.code.startsWith('script_unknown_attribute')
			);
		}
	}
};

export default config;
