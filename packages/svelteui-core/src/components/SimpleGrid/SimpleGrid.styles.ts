import { createStyles } from '$lib/styles';
import type { SvelteUINumberSize } from '$lib/styles';

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
