import { createStyles } from '$lib/styles-old';
import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles-old';
import type { AlertVariant } from './Alert';

export interface AlertStylesParams {
	color: SvelteUIColor;
	radius: SvelteUINumberSize;
	variant: AlertVariant;
}

export default createStyles((theme, { color, radius, variant }: AlertStylesParams, getRef) => {
	return {
		root: {
			fontFamily: theme.fonts.standard.value ?? 'sans-serif',
			position: 'relative',
			overflow: 'hidden',
			padding: `${theme.space.sm.value}px ${theme.space.md.value}px`,
			borderRadius: theme.fn.radius(radius),
			border: '1px solid transparent',
			'&.light': {
				darkMode: {
					backgroundColor: theme.fn.variant({ variant: 'light', color }).background[0],
					color: theme.fn.variant({ variant: 'light', color }).color[0]
				},
				backgroundColor: theme.fn.variant({ variant: 'light', color }).background[1],
				color: theme.fn.variant({ variant: 'light', color }).color[1]
			},

			'&.filled': {
				darkMode: {
					backgroundColor: theme.fn.variant({ variant: 'filled', color }).background[0]
				},
				backgroundColor: theme.fn.variant({ variant: 'filled', color }).background[1],
				color: theme.colors.white.value,

				[`& .${getRef('closeButton')}`]: {
					color: theme.colors.white.value
				}
			},

			'&.outline': {
				darkMode: {
					color: theme.fn.variant({ variant: 'outline', color }).color[0],
					borderColor: theme.fn.variant({ variant: 'outline', color }).border[0]
				},
				color: theme.fn.variant({ variant: 'outline', color }).color[1],
				borderColor: theme.fn.variant({ variant: 'outline', color }).border[1]
			}
		},
		wrapper: {
			display: 'flex'
		},
		content: {
			flex: 1
		},
		title: {
			boxSizing: 'border-box',
			margin: 0,
			marginBottom: 7,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			lineHeight: theme.lineHeights.sm.value,
			fontSize: theme.fontSizes.sm.value,
			fontWeight: '$bold'
		},
		label: {
			display: 'block',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},
		icon: {
			lineHeight: 1,
			width: 20,
			height: 20,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			marginRight: theme.space.mdPX.value,
			marginTop: 1
		},
		message: {
			darkMode: {
				color:
					variant === 'filled'
						? theme.colors.white.value
						: variant === 'light'
						? theme.colors.white.value
						: theme.fn.themeColor('dark', 0)
			},
			lineHeight: theme.lineHeights.sm.value,
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			fontSize: theme.fontSizes.sm.value,
			color: variant === 'filled' ? theme.colors.white.value : theme.colors.black.value
		},
		closeButton: {
			ref: getRef('closeButton'),
			marginTop: 2
		}
	};
});
