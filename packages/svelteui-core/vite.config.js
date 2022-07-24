import { sveltekit } from '@sveltejs/kit/vite';
import { searchForWorkspaceRoot } from 'vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
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
};

export default config;
