import { createStyles } from '$lib/styles-old';
import type { CSS, SvelteUINumberSize } from '$lib/styles-old';

export interface MediaQueryStylesParams {
	smallerThan: SvelteUINumberSize;
	largerThan: SvelteUINumberSize;
	styles: CSS;
	query: string;
}

export default createStyles(
	(theme, { query, styles, largerThan, smallerThan }: MediaQueryStylesParams) => {
		const media = { root: {} };
		const minWidth = theme.fn.size({ size: largerThan, sizes: theme.breakpoints }) + 1;
		const maxWidth = theme.fn.size({ size: smallerThan, sizes: theme.breakpoints });

		if (largerThan !== undefined && smallerThan !== undefined) {
			media.root[`@media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`] = styles;
		} else {
			if (largerThan !== undefined) {
				media.root[
					`@media (min-width: ${
						theme.fn.size({ size: largerThan, sizes: theme.breakpoints }) + 1
					}px)`
				] = styles;
			}

			if (smallerThan !== undefined) {
				media.root[
					`@media (max-width: ${theme.fn.size({ size: smallerThan, sizes: theme.breakpoints })}px)`
				] = styles;
			}
		}

		if (query) {
			media.root[`@media ${query}`] = styles;
		}

		return media;
	}
);
