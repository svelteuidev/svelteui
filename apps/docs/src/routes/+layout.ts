import type { LayoutLoad } from './$types';

export const prerender = true;

// Necessary since without it, console errors are thrown
// when building for production.
export const ssr = false;

export const load: LayoutLoad = async ({ url: { pathname } }) => {
	return {
		pathname
	};
};
