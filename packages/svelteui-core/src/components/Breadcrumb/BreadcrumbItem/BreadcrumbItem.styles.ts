import { createStyles, keyframes } from '$lib/styles';
import type { SvelteUINumberSize, SvelteUIColor, ColorShades } from '$lib/styles';

export interface BreadcrumbItemStylesParams {
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

export const fontSizes = {
	xs: 12,
	sm: 14,
	md: 16,
	lg: 18,
	xl: 20
};

export default createStyles(
	(theme, { color, size }: BreadcrumbItemStylesParams) => ({
		root: {
			[`${theme.dark} &`]: {
				backgroundColor: theme.fn.themeColor('dark', 4)
			},
			position: 'relative',
			'& .wrapper': {
				display: 'flex',
				gap: size,
				alignItems: 'center',
				overflow: 'hidden',
				fontSize: fontSizes[size],
				'& a': {
					display: 'flex',
					alignItems: 'center',
					'text-decoration': 'none',
					color: theme.fn.themeColor(color, 6) +'!important'
				},
				'& .innerText': {
					marginLeft: '4px'
				},
				'& .icon': {
					fontSize: fontSizes[size],
				}
			}
			// ,
			// '& .active': {
			// 	color: '$red500'
			// }

		},





	})
);
