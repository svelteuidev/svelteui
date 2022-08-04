import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';

export interface SegmentedControlProps extends DefaultProps {
	data: string[] | SegmentedControlItem[];
	value?: string;
	disabled?: boolean;
	name?: string;
	fullWidth?: boolean;
	color?: SvelteUIColor;
	size?: SvelteUISize;
	radius?: SvelteUINumberSize;
	transitionDuration?: number;
	transitionTimingFunction?: string;
	defaultValue?: string;
	orientation?: 'vertical' | 'horizontal';
	onChange?(value: string): void;
}

export interface SegmentedControlItem {
	value: string;
	label: unknown;
	disabled?: boolean;
}

export interface SegmentedControlStylesParams {
	fullWidth: boolean;
	color: SvelteUIColor;
	radius: SvelteUINumberSize;
	shouldAnimate: boolean;
	transitionDuration: number;
	transitionTimingFunction: string;
	size: SvelteUISize;
	orientation: 'vertical' | 'horizontal';
}

export const WRAPPER_PADDING = 4;

const sizes = {
	xs: '3px 6px',
	sm: '5px 10px',
	md: '7px 14px',
	lg: '9px 16px',
	xl: '12px 20px'
};

export default createStyles(
	(
		theme,
		{
			color,
			fullWidth,
			orientation,
			radius,
			shouldAnimate,
			size,
			transitionDuration,
			transitionTimingFunction
		}: SegmentedControlStylesParams
	) => {
		const vertical = orientation === 'vertical';
		// const colors = theme.fn.variant({ variant: 'filled', color });
		const colors = { background: null };
		return {
			label: {
				[`${theme.dark} &`]: {
					color: theme.fn.themeColor('dark', 1),
					'&:hover': {
						color: theme.fn.themeColor('dark', 0)
					}
				},
				focusRing: 'auto',
				WebkitTapHighlightColor: 'transparent',
				borderRadius: theme.fn.radius(radius),
				fontWeight: 500,
				fontSize: size in theme.fontSizes ? theme.fontSizes[size].value : theme.fontSizes.sm.value,
				cursor: 'pointer',
				display: 'block',
				textAlign: 'center',
				padding: sizes[size in sizes ? size : 'sm'],
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				userSelect: 'none',
				color: theme.fn.themeColor('gray', 7),
				transition: `color ${shouldAnimate ? 0 : transitionDuration}ms ${transitionTimingFunction}`,

				'&:hover': {
					color: 'black'
				}
			},

			control: {
				[`${theme.dark} &`]: {
					borderColor: theme.fn.themeColor('dark', 4)
				},
				position: 'relative',
				boxSizing: 'border-box',
				flex: 1,
				zIndex: 2,
				transition: `border-left-color ${
					shouldAnimate ? 0 : transitionDuration
				}ms ${transitionTimingFunction}`,

				'&:not(:first-of-type)': {
					borderStyle: 'solid',
					borderWidth: vertical ? '1px 0 0 0' : '0 0 0 1px',
					borderColor: theme.fn.themeColor('gray', 3)
				}
			},

			input: {
				height: 0,
				width: 0,
				position: 'absolute',
				overflow: 'hidden',
				whiteSpace: 'nowrap',
				opacity: 0,

				// input is hidden by default, these styles add focus to label when user navigates with keyboard
				'&:focus': {
					outline: 'none',

					[`& + .label`]: {
						[`${theme.dark} &`]: {
							boxShadow: `0 0 0 2px ${theme.fn.themeColor(
								'dark',
								9
							)}, 0 0 0 4px ${theme.fn.themeColor('blue', 7)}`
						}
					},
					boxShadow: `0 0 0 2px 'white', 0 0 0 4px ${theme.fn.themeColor('blue', 5)}`,

					'&:focus:not(:focus-visible)': {
						[`& + .label`]: {
							boxShadow: 'none'
						}
					}
				}
			},

			root: {
				[`${theme.dark} &`]: {
					backgroundColor: theme.fn.themeColor('dark', 8)
				},
				position: 'relative',
				display: fullWidth || vertical ? 'flex' : 'inline-flex',
				width: vertical && !fullWidth ? 'max-content' : 'auto',
				flexDirection: vertical ? 'column' : 'row',
				backgroundColor: theme.fn.themeColor('gray', 1),
				borderRadius: theme.fn.radius(radius),
				overflow: 'hidden',
				padding: WRAPPER_PADDING
			},

			controlActive: {
				[`${theme.dark} &`]: {
					boxShadow: shouldAnimate ? color || 'none' : undefined,
					backgroundColor: shouldAnimate
						? color in theme.colors
							? colors.background
							: theme.fn.themeColor('dark', 5)
						: undefined
				},
				borderLeftColor: 'transparent !important',
				borderTopColor: 'transparent !important',

				[`& + .control`]: {
					borderLeftColor: 'transparent !important',
					borderTopColor: 'transparent !important'
				},
				borderRadius: theme.fn.radius(radius),
				boxShadow: shouldAnimate ? color || theme.shadows.xs.value : undefined,
				backgroundColor: shouldAnimate
					? color in theme.colors
						? colors.background
						: 'white'
					: undefined
			},

			labelActive: {
				[`${theme.dark} &`]: {
					'&, &:hover': {
						color: color in theme.colors || 'white'
					}
				},
				'&, &:hover': {
					color: color in theme.colors || 'black'
				}
			},

			disabled: {
				[`${theme.dark} &`]: {
					'&, &:hover': {
						color: theme.fn.themeColor('dark', 3),
						cursor: 'not-allowed'
					}
				},
				'&, &:hover': {
					color: theme.fn.themeColor('gray', 5),
					cursor: 'not-allowed'
				}
			},

			active: {
				[`${theme.dark} &`]: {
					boxShadow: color || 'none',
					backgroundColor:
						color in theme.colors ? colors.background : theme.fn.themeColor('dark', 5)
				},
				boxSizing: 'border-box',
				borderRadius: theme.fn.radius(radius),
				position: 'absolute',
				zIndex: 1,
				boxShadow: color || theme.shadows.xs.value,
				transition: `transform ${
					shouldAnimate ? 0 : transitionDuration
				}ms ${transitionTimingFunction}, width ${
					shouldAnimate ? 0 : transitionDuration / 2
				}ms ${transitionTimingFunction}`,
				backgroundColor: color in theme.colors ? colors.background : 'white'
			}
		};
	}
);
