import { createStyles, vFunc } from '$lib/styles';
import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { TimelineItemVariant } from './TimelineItem';

export interface TimelineItemStyleParams {
	align?: 'left' | 'right';
	bulletSize?: SvelteUINumberSize;
	radius?: SvelteUINumberSize;
	color?: SvelteUIColor;
	lineVariant?: TimelineItemVariant;
	lineWidth?: number;
}

export default createStyles(
	(
		theme,
		{ align, bulletSize, radius, color, lineVariant, lineWidth }: TimelineItemStyleParams,
    getRef
	) => {
		const colors = vFunc(color).filled;

		return {
			root: {
				position: 'relative',
				boxSizing: 'border-box',
				color: theme.colors.black.value,
				paddingLeft: align === 'left' ? theme.space.xlPX.value : 0,
				paddingRight: align === 'right' ? theme.space.xlPX.value : 0,
				textAlign: align,
				darkMode: {
					color: theme.fn.themeColor('dark', 0)
				},

				'&:not(:last-of-type)::before': {
					display: 'block'
				},

				'&:not(:first-of-type)': {
					marginTop: theme.space.xlPX.value
				},

				'&::before': {
					boxSizing: 'border-box',
					position: 'absolute',
					top: 0,
					bottom: `${-theme.space.xl.value}px`,
					left: align === 'left' ? -lineWidth : 'auto',
					right: align === 'right' ? -lineWidth : 'auto',
					borderLeft: `${lineWidth}px ${lineVariant} ${theme.fn.themeColor('gray', 3)}`,
					content: '""',
					display: 'none',
					darkMode: {
						borderLeft: `${lineWidth}px ${lineVariant} ${theme.fn.themeColor('dark', 4)}`
					}
				},
        '&.lineActive': {
          '&::before': {
            borderLeftColor: colors.backgroundColor
          }
        },
				[`&.active .${getRef('bulletContainer')}`]: {
					borderColor: colors.backgroundColor,
					backgroundColor: theme.colors.white.value
				},
				[`&.active .${getRef('bulletContainerWithChild')}`]: {
					backgroundColor: colors.backgroundColor,
					color: theme.colors.white.value
				},
			},
			bulletContainer: {
        ref: getRef('bulletContainer'),
				boxSizing: 'border-box',
				width: bulletSize,
				height: bulletSize,
				borderRadius: theme.fn.radius(radius),
				border: `${lineWidth}px solid ${theme.fn.themeColor('gray', 3)}`,
				backgroundColor: theme.colors.white.value,
				position: 'absolute',
				top: 0,
				left: align === 'left' ? -bulletSize / 2 - lineWidth / 2 : 'auto',
				right: align === 'right' ? -bulletSize / 2 - lineWidth / 2 : 'auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: theme.colors.white.value,
				darkMode: {
					border: `${lineWidth}px solid ${theme.fn.themeColor('dark', 4)}`,
					backgroundColor: theme.fn.themeColor('dark', 7)
				}
			},
			bulletContainerWithChild: {
        ref: getRef('bulletContainerWithChild'),
				borderWidth: 1,
				backgroundColor: theme.fn.themeColor('gray', 3),
				color: theme.colors.black.value,
				darkMode: {
					backgroundColor: theme.fn.themeColor('dark', 4),
					color: theme.fn.themeColor('dark', 0)
				}
			},
			bullet: {},
			container: {},
			title: {
				fontWeight: 500,
				lineHeight: 1,
				marginBottom: `${+theme.space.xs.value / 2}px`,
				textAlign: align
			},
			content: {
				textAlign: align
			}
		};
	}
);
