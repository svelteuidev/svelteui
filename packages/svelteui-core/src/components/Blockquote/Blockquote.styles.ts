import { createStyles, rem, type SvelteUIColor } from '$lib/styles-old';

export interface BlockquoteStylesParams {
	color: SvelteUIColor;
}

export default createStyles((theme, { color }: BlockquoteStylesParams) => {
	return {
		root: {
			darkMode: {
				color: theme.fn.themeColor('dark', 0)
			},
			fontFamily: theme.fonts.standard.value ?? 'sans-serif',
			fontSize: theme.fontSizes.lg.value,
			lineHeight: theme.lineHeights.md.value,
			color: theme.fn.themeColor('black'),
			margin: 0,
			borderTopRightRadius: theme.radii.sm.value,
			borderBottomRightRadius: theme.radii.sm.value,
			padding: `${theme.space.mdPX.value} ${theme.space.lgPX.value}`
		},

		inner: {
			display: 'flex'
		},

		body: {
			flex: 1,
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},

		icon: {
			darkMode: {
				color: theme.fn.variant({ variant: 'filled', color }).background[0]
			},
			color: theme.fn.variant({ variant: 'filled', color }).background[1],
			marginRight: theme.space.lgPX.value,
			marginTop: rem(2),
			width: rem(22)
		},

		cite: {
			darkMode: {
				color: theme.fn.themeColor('dark', 2)
			},
			display: 'block',
			fontSize: theme.fontSizes.sm.value,
			marginTop: theme.space.xsPX.value,
			color: theme.fn.themeColor('gray', 6),
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		}
	};
});
