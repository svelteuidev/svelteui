import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface SpaceProps extends DefaultProps {
	w: SvelteUINumberSize;
	h: SvelteUINumberSize;
}

interface SpaceStyleParams {
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
