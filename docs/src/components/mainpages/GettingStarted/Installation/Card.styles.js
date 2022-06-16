import { createStyles } from '@svelteuidev/core';

export default createStyles((theme) => {
	return {
		root: {
			[`${theme.dark} &`]: {
				border: `1px solid ${theme.fn.themeColor('dark', 8)} !important`,
				backgroundColor: theme.fn.themeColor('dark', 8),
				'&:hover': {
					backgroundColor: theme.fn.themeColor('dark', 9)
				}
			},
			display: 'flex',
			width: '100%',
			border: `1px solid ${theme.fn.themeColor('gray', 4)} !important`,
			borderRadius: `${theme.radii.sm.value} !important`,
			padding: `${theme.space.lgPX.value} !important`,
			backgroundColor: 'white !important',
			transition: 'box-shadow 200ms ease, transform 100ms ease',

			'&:hover': {
				transform: 'scale(1.01)',
				boxShadow: '$md'
			}
		}
	};
});
