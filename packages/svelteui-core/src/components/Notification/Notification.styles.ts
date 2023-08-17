import { createStyles, vFunc } from '$lib/styles';
import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export interface NotificationStylesParams {
	color: SvelteUIColor;
	radius: SvelteUINumberSize;
}

export default createStyles((theme, { color, radius }: NotificationStylesParams, getRef) => {
	const _radiusPx = theme.fn.radius(radius);
	const _radius = parseInt(_radiusPx.toString().split('px')[0]);
	const topBottom = Math.min(Math.max(_radius / 1.2, 4), 30);
	const colors = vFunc(color).filled;

	return {
		root: {
			darkMode: {
				backgroundColor: theme.fn.themeColor('dark', 6),
				border: `1px solid ${theme.fn.themeColor('dark', 6)}`
			},
			fontFamily: theme.fonts.standard.value,
			boxSizing: 'border-box',
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
			paddingLeft: 22,
			paddingRight: 5,
			paddingTop: theme.space.xsPX.value,
			paddingBottom: theme.space.xsPX.value,
			borderRadius: _radius,
			backgroundColor: theme.colors.white.value,
			boxShadow: theme.shadows.lg,
			border: `1px solid ${theme.fn.themeColor('gray', 2)}`,
			'&::before': {
				content: "''",
				display: 'block',
				position: 'absolute',
				width: 6,
				top: topBottom,
				bottom: topBottom,
				left: 4,
				borderRadius: _radius,
				backgroundColor: colors.backgroundColor
			},
			'&.withLoader': {
				paddingLeft: theme.space.xsPX.value,
				'&::before': {
					display: 'none'
				}
			},
			'&.withIcon': {
				paddingLeft: theme.space.xsPX.value,
				'&::before': {
					display: 'none'
				},
				[`& .${getRef('icon')}`]: {
					backgroundColor: colors.backgroundColor,
					color: theme.colors.white.value
				}
			}
		},
		icon: {
			ref: getRef('icon'),
			boxSizing: 'border-box',
			marginRight: theme.space.mdPX.value,
			width: 28,
			height: 28,
			borderRadius: 28,
			display: 'flex',
			flex: 'none',
			alignItems: 'center',
			justifyContent: 'center',
			color: theme.colors.white.value
		},
		loader: {
			marginRight: theme.space.mdPX.value
		},
		content: {
			flex: 1,
			overflow: 'hidden',
			marginRight: 10
		},
		title: {
			darkMode: {
				color: theme.colors.white.value
			},
			lineHeight: 1.4,
			marginBottom: 2,
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			color: theme.fn.themeColor('gray', 9)
		},
		description: {
			darkMode: {
				color: theme.fn.themeColor('dark', 2)
			},
			color: theme.fn.themeColor('gray', 6),
			lineHeight: 1.4,
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			'&:only-child': {
				darkMode: {
					color: theme.fn.themeColor('dark', 0)
				},
				color: theme.colors.black.value
			}
		},
		closeButton: {
			darkMode: {
				color: theme.colors.white.value
			},
			color: theme.colors.black.value
		}
	};
});
