import { createStyles } from '$lib/styles';
import type { SvelteUIShadow, SvelteUINumberSize } from '$lib/styles';

export interface PaperStyleParams {
	shadow: SvelteUIShadow;
	radius: SvelteUINumberSize;
	withBorder: boolean;
	padding: SvelteUINumberSize;
}

export default createStyles((theme, { radius, shadow, withBorder, padding }: PaperStyleParams) => {
	return {
		root: {
			darkMode: {
				backgroundColor: theme.fn.themeColor('dark', 7),
				color: theme.fn.themeColor('dark')
			},
			padding: theme.fn.size({ size: padding, sizes: theme.space }),
			outline: 0,
			display: 'block',
			textDecoration: 'none',
			color: theme.colors.black.value,
			backgroundColor: theme.colors.white.value,
			boxSizing: 'border-box',
			borderRadius: `$${radius}`,
			WebkitTapHighlightColor: 'transparent',
			boxShadow: theme.shadows[shadow].value || shadow || 'none',
			border: undefined
		},
		withBorder: {
			darkMode: {
				border: `1px solid ${theme.fn.themeColor('dark', 4)}`
			},
			border: `1px solid ${theme.fn.themeColor('gray', 3)}`
		}
	};
});
