import { extractFromSvelteConfig } from 'vitest-svelte-kit';
import viteConfig from './vite.config.js';

async function extractConfig() {
	const config = await extractFromSvelteConfig();
	return {
		...config,
		...viteConfig
	};
}

export default extractConfig();
