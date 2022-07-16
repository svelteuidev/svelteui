import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface SimpleGridProps extends DefaultProps {
	breakpoints?: SimpleGridBreakpoint[];
	cols?: number;
	spacing?: SvelteUINumberSize;
}
export interface SimpleGridBreakpoint {
	maxWidth?: SvelteUINumberSize;
	minWidth?: SvelteUINumberSize;
	cols: number;
	spacing?: SvelteUINumberSize;
}

export interface SimpleGridStyleParams {
	cols?: number;
	spacing?: SvelteUINumberSize;
	gridBreakpoints: Record<string, string>;
}

export default createStyles((theme, { cols, spacing, gridBreakpoints }: SimpleGridStyleParams) => {
	return {
		root: {
			boxSizing: 'border-box',
			display: 'grid',
			gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
			gap: theme.fn.size({ size: spacing, sizes: theme.space }),
			...gridBreakpoints
		}
	};
});
