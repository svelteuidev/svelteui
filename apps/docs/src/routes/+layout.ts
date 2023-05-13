import type { PageLoad } from './$types';

export const prerender = true;

// Necessary since without it, console errors are thrown
// when building for production.
export const ssr = false;

export const load = (async ({ url: { pathname } }) => {
	return {
		pathname
	};
}) satisfies PageLoad;
