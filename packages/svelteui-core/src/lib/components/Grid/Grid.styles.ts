import { createStyles } from '$lib/styles';
import type { Writable } from 'svelte/store';
import type { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export type GridContext = Writable<{ cols: number; grow: boolean; spacing: SvelteUINumberSize }>;

export interface GridProps extends DefaultProps {
	align?: CSS['alignItems'];
	cols?: number;
	grow?: boolean;
	spacing?: SvelteUINumberSize;
	justify?: CSS['justifyContent'];
}

interface GridStyleParams {
	align?: CSS['alignItems'];
	cols?: number;
	grow?: boolean;
	spacing?: SvelteUINumberSize;
	justify?: CSS['justifyContent'];
}

export default createStyles((theme, { align, cols, grow, spacing, justify }: GridStyleParams) => {
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
