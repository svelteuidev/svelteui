import { createStyles } from '$lib/styles';

export default createStyles((theme) => {
	return {
		root: {
			darkMode: {
				color: theme.fn.themeColor('dark', 2)
			},
			color: theme.fn.themeColor('gray', 6),
			fontWeight: 500,
			fontSize: theme.fontSizes.xs,
			padding: `${+theme.space.xs.value / 2}px ${+theme.space.sm.value}px`,
			cursor: 'default'
		}
	};
});
