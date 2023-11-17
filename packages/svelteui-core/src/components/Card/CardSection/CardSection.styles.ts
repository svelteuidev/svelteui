import { createStyles } from '$lib/styles-old';
import type { SvelteUINumberSize } from '$lib/styles-old';

export interface CardSectionStyleParams {
	padding: SvelteUINumberSize;
}

export default createStyles((theme, { padding }: CardSectionStyleParams) => {
	return {
		root: {
			display: 'block',
			marginLeft: -1 * theme.fn.size({ size: padding, sizes: theme.space }),
			marginRight: -1 * theme.fn.size({ size: padding, sizes: theme.space })
		}
	};
});
