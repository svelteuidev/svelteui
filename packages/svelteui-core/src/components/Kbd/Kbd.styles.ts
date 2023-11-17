import { createStyles } from '$lib/styles-old';

export default createStyles((theme) => {
	return {
		root: {
			[`${theme.dark} &`]: {
				bc: theme.fn.themeColor('dark', 4),
				color: theme.fn.themeColor('dark', 0),
				border: `1px solid ${theme.fn.themeColor('dark', 9)}`,
				borderBottom: `3px solid ${theme.fn.themeColor('dark', 9)}`
			},
			lineHeight: theme.lineHeights.md.value,
			fontFamily: theme.fonts.mono.value,
			fontSize: theme.fontSizes.xs.value,
			fontWeight: 700,
			backgroundColor: theme.fn.themeColor('gray', 0),
			color: theme.fn.themeColor('gray', 7),
			padding: `3px ${+theme.space.xs.value / 2}px`,
			borderRadius: theme.radii.sm.value,
			border: `1px solid ${theme.fn.themeColor('gray', 3)}`,
			borderBottom: `3px solid ${theme.fn.themeColor('gray', 3)}`
		}
	};
});
