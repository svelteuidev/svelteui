import type { PageLoad } from './$types';

export const load = (async ({ url: { pathname } }) => {
	return {
		pathname
	};
}) satisfies PageLoad;
