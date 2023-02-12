import { createStyles, keyframes } from '$lib/styles';
import type { SvelteUINumberSize, SvelteUIColor, ColorShades } from '$lib/styles';

export interface BreadcrumbStylesParams {
	color: SvelteUIColor;
	size: SvelteUINumberSize;
}


export const sizes = {
	xs: 3,
	sm: 5,
	md: 8,
	lg: 12,
	xl: 16
};

export default createStyles(
	(theme, { color, size }: BreadcrumbStylesParams) => ({
		root: {
			// [`${theme.dark} &`]: {
			// 	backgroundColor: theme.fn.themeColor('dark', 4)
			// },
			position: 'relative',
			display:'flex'
			//height: theme.fn.size({ size, sizes }),
			// backgroundColor: theme.fn.themeColor('gray', 2),
			// overflow: 'hidden'
		}


	})
);
