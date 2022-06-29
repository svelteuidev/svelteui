import { createStyles } from '@svelteuidev/core';
import type { DefaultProps, SvelteUISize, SvelteUIColor } from '@svelteuidev/core';

export interface DayProps extends DefaultProps {
	value: Date;
	selected: boolean;
	weekend: boolean;
	outside: boolean;
	disabled: boolean;
	hasValue: boolean;
	inRange: boolean;
	firstInRange: boolean;
	lastInRange: boolean;
	size: SvelteUISize;
	fullWidth: boolean;
	firstInMonth: boolean;
	focusable?: boolean;
	hideOutsideDates?: boolean;
	primaryColor: SvelteUIColor;
	onMouseEnter(date: Date, event: MouseEvent): void;
	renderDay?(date: Date): unknown;
}

interface DayStyleParams {
	size: SvelteUISize;
	fullWidth: boolean;
	hideOutsideDates: boolean;
	primaryColor: SvelteUIColor;
}

export const sizes = {
	xs: 34,
	sm: 38,
	md: 46,
	lg: 58,
	xl: 66
};

export default createStyles(
	(theme, { size, fullWidth, hideOutsideDates, primaryColor }: DayStyleParams) => {
		const { rgba } = theme.fn;
		return {
			root: {
				darkMode: {
					color: theme.fn.themeColor('dark', 0)
				},
				focusRing: 'auto',
				position: 'relative',
				WebkitTapHighlightColor: 'transparent',
				backgroundColor: 'transparent',
				width: fullWidth ? '100%' : theme.fn.size({ size, sizes }),
				height: theme.fn.size({ size, sizes }),
				lineHeight: `${theme.fn.size({ size, sizes })}px`,
				fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
				padding: 0,
				borderRadius: theme.radii.sm.value,
				border: 'none',
				cursor: 'pointer',
				userSelect: 'none',
				color: theme.fn.themeColor('gray', 7),

				'&:disabled': {
					[`${theme.dark} &`]: {
						color: theme.fn.themeColor('dark', 3)
					},
					pointerEvents: 'none',
					color: theme.fn.themeColor('gray', 4)
				},

				'@media (hover: hover)': {
					'&:hover': {
						[`${theme.dark} &`]: {
							backgroundColor: theme.fn.themeColor('dark', 5)
						},
						backgroundColor: theme.fn.themeColor('gray', 0)
					}
				},
				'@media (hover: none)': {
					'&:active': {
						[`${theme.dark} &`]: {
							backgroundColor: theme.fn.themeColor('dark', 5)
						},
						backgroundColor: theme.fn.themeColor('gray', 0)
					}
				},

				[`&.weekend:not(:disabled)`]: {
					[`${theme.dark} &`]: {
						color: theme.fn.themeColor('red', 5)
					},
					color: theme.fn.themeColor('red', 7)
				},

				[`&.outside`]: {
					[`${theme.dark} &`]: {
						color: `${theme.fn.themeColor('dark', 3)} !important`
					},
					display: hideOutsideDates ? 'none' : undefined,
					color: `${theme.fn.themeColor('gray', 4)} !important`
				},

				[`&.inRange:not(:disabled)`]: {
					[`${theme.dark} &`]: {
						backgroundColor: rgba(theme.fn.themeColor(primaryColor, 8), 0.35)
					},
					backgroundColor: rgba(theme.fn.themeColor(primaryColor, 0), 1),
					borderRadius: 0
				},

				[`&.selected:not(:disabled)`]: {
					[`${theme.dark} &`]: {
						backgroundColor: theme.fn.themeColor(primaryColor, 8)
					},
					backgroundColor: theme.fn.themeColor(primaryColor, 6),
					color: theme.colors.white.value
				},

				[`&.firstInRange:not(:disabled)`]: {
					borderTopLeftRadius: theme.radii.sm.value,
					borderBottomLeftRadius: theme.radii.sm.value
				},

				[`&.lastInRange:not(:disabled)`]: {
					borderTopRightRadius: theme.radii.sm.value,
					borderBottomRightRadius: theme.radii.sm.value
				}
			}
		};
	}
);
