import { createStyles } from '$lib/styles-old';
import type { SvelteUINumberSize } from '$lib/styles-old';

export interface SpaceStyleParams {
	w: SvelteUINumberSize;
	h: SvelteUINumberSize;
}

export default createStyles((theme, { h, w }: SpaceStyleParams) => {
	return {
		root: {
			width: theme.fn.size({ size: w, sizes: theme.space }),
			minWidth: theme.fn.size({ size: w, sizes: theme.space }),
			height: theme.fn.size({ size: h, sizes: theme.space }),
			minHeight: theme.fn.size({ size: h, sizes: theme.space })
		}
	};
});
