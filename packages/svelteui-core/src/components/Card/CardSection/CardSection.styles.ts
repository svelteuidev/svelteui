import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface CardSectionProps extends DefaultProps {
	padding?: SvelteUINumberSize;
}

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
