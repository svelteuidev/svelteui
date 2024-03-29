import { createStyles } from '$lib/styles';
import type { CSS, SvelteUINumberSize } from '$lib/styles';

export interface GridStyleParams {
	align?: CSS['alignItems'];
	spacing?: SvelteUINumberSize;
	justify?: CSS['justifyContent'];
}

export default createStyles((theme, { align, spacing, justify }: GridStyleParams) => {
	return {
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: justify,
			alignItems: align,
			margin: (-1 * theme.fn.size({ size: spacing, sizes: theme.space })) / 2
		}
	};
});
