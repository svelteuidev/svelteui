import { createStyles } from '$lib/styles';
import type { SvelteUINumberSize, DefaultProps, CSS } from '$lib/styles';

export interface StackProps extends DefaultProps {
	spacing?: SvelteUINumberSize;
	align?: CSS['alignItems'];
	justify?: CSS['justifyContent'];
}
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
