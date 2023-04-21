import { createStyles } from '@svelteuidev/core';

export default createStyles((theme, _params, getRef) => {
	return {
		root: {
			[`${theme.dark}`]: {
				color: theme.colors.white.value,
				backgroundColor: theme.fn.themeColor('dark', 8),
				border: `1px solid ${theme.fn.themeColor('dark', 8)}`
			},
			display: 'flex !important',
			alignItems: 'center !important',
			textDecoration: 'none !important',
			justifyContent: 'space-between !important',
			color: `${theme.colors.black.value} !important`,
			padding: `${theme.space.mdPX.value} !important`,
			borderRadius: `${theme.radii.md.value} !important`,
			backgroundColor: `${theme.colors.white.value} !important`,
			border: `1px solid ${theme.fn.themeColor('gray', 3)} !important`,
			transition: 'box-shadow 200ms ease, transform 100ms ease',
			'&.next': {
				[`& .${getRef('body')}`]: {
					marginRight: `${theme.space.mdPX.value} !important`
				}
			},

			'&:hover': {
				transform: 'scale(1.01)',
				boxShadow: '$md'
			}
		},

		body: {
			ref: getRef('body'),
      marginRight: `${_params.type === "next" ? theme.space.mdPX.value : "0px"} !important`,
      marginLeft: `${_params.type === "prev" ? theme.space.mdPX.value : "0px"} !important`
		},

    text: {
      [`${theme.dark} &`]: {
        color: "white !important"
      }
    }
	};
});
