import { createStyles } from '$lib/styles-old';
import type { CSS, SvelteUINumberSize } from '$lib/styles-old';

export interface StackStyleParam {
	spacing: SvelteUINumberSize;
	align: CSS['alignItems'];
	justify: CSS['justifyContent'];
}

export default createStyles((theme, { align, justify, spacing }: StackStyleParam) => {
	return {
		root: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: `${align}`,
			justifyContent: `${justify}`,
			gap: theme.fn.size({ size: spacing, sizes: theme.space })
		}
	};
});
