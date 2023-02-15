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
			position: 'relative',
			display: 'flex'
		}


	})
);
