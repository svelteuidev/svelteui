import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUIShadow, SvelteUINumberSize } from '$lib/styles';

export interface PaperProps extends DefaultProps {
	shadow?: SvelteUIShadow;
	radius?: SvelteUINumberSize;
	withBorder?: boolean;
	padding?: SvelteUINumberSize;
}

interface PaperStyleParams {
	shadow: SvelteUIShadow;
	radius: SvelteUINumberSize;
	withBorder: boolean;
	padding: SvelteUINumberSize;
}

export default createStyles((theme, { radius, shadow, withBorder, padding }: PaperStyleParams) => {
	return {
		root: {
			[`${theme.dark} &`]: {
				bc: theme.colors['dark700'].value,
				color: theme.colors['dark50'].value,
				border: withBorder ? `1px solid ${theme.colors['dark600'].value}` : undefined
			},
			padding: theme.fn.size({ size: padding, sizes: theme.space }),
			outline: 0,
			display: 'block',
			textDecoration: 'none',
			color: 'black',
			backgroundColor: 'white',
			boxSizing: 'border-box',
			borderRadius: `$${radius}`,
			WebkitTapHighlightColor: 'transparent',
			boxShadow: theme.shadows[shadow].value || shadow || 'none',
			border: withBorder ? `1px solid ${theme.colors['gray200'].value}` : undefined
		}
	};
});
