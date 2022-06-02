import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface CardSectionProps extends DefaultProps {
	padding?: SvelteUINumberSize;
	first?: boolean;
	last?: boolean;
}

interface CardSectionStyleParams {
	padding: SvelteUINumberSize;
	first: boolean;
	last: boolean;
}

export default createStyles((theme, { first, last, padding }: CardSectionStyleParams) => {
	return {
		root: {
			display: 'block',
			marginLeft: -1 * theme.fn.size({ size: padding, sizes: theme.space }),
			marginRight: -1 * theme.fn.size({ size: padding, sizes: theme.space }),
			marginTop: first ? -1 * theme.fn.size({ size: padding, sizes: theme.space }) : undefined,
			marginBottom: last ? -1 * theme.fn.size({ size: padding, sizes: theme.space }) : undefined
		}
	};
});
