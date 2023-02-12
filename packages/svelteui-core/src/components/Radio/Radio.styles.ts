import { createStyles } from '$lib/styles';
import type { SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';

export interface RadioStyleParams {
	size: SvelteUISize;
	color: SvelteUIColor;
	labelDirection?: 'right' | 'left';
	error: boolean;
}

export const sizes = {
	xs: 16,
	sm: 20,
	md: 24,
	lg: 30,
	xl: 36
};

const innerSizes = {
	xs: 6,
	sm: 8,
	md: 10,
	lg: 14,
	xl: 16
};

const padding = {
	xs: 5,
	sm: 8,
	md: 10,
	lg: 11,
	xl: 12
};

export default createStyles(
	(theme, { color, size, labelDirection, error }: RadioStyleParams, getRef) => {
		return {
			root: {
				display: 'flex'
			},
			container: {
				display: 'flex',
				flexDirection: labelDirection === 'left' ? 'row' : 'row-reverse',
				alignItems: 'center'
			},
			inputContainer: {
				position: 'relative'
			},
			input: {
				border: `1px solid ${
					error
						? theme.fn.variant({ variant: 'filled', color: 'red' }).background
						: theme.fn.themeColor('gray', 4)
				}`,
				position: 'relative',
				appearance: 'none',
				width: theme.fn.size({ sizes, size }),
				height: theme.fn.size({ sizes, size }),
				borderRadius: theme.fn.size({ sizes, size }),
				margin: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'pointer',
				backgroundColor: theme.colors.white.value,

				darkMode: {
					backgroundColor: theme.fn.themeColor('dark', 6),
					border: `1px solid ${
						error
							? theme.fn.variant({ variant: 'filled', color: 'red' }).background
							: theme.fn.themeColor('dark', 4)
					}`
				},

				'&:checked': {
					background: theme.fn.variant({ variant: 'filled', color }).background[1],
					borderColor: theme.fn.variant({ variant: 'filled', color }).background[1],
					[`& + .${getRef('inner')}`]: {
						opacity: 1,
						transform: 'scale(1)'
					}
				},
				'&.disabled': {
					backgroundColor: theme.fn.themeColor('gray', 1),
					borderColor: theme.fn.themeColor('gray', 4),
					darkMode: {
						backgroundColor: theme.fn.themeColor('dark', 5),
						borderColor: theme.fn.themeColor('dark', 5)
					},
					[`& + .${getRef('inner')}`]: {
						color: theme.fn.themeColor('gray', 4),
						darkMode: {
							color: theme.fn.themeColor('dark', 6)
						}
					}
				}
			},
			inner: {
				ref: getRef('inner'),
				backgroundColor: theme.colors.white.value,
				borderRadius: '100%',
				opacity: 0,
				transform: 'scale(0.75) translateY(2px)',
				pointerEvents: 'none',
				width: theme.fn.size({ sizes: innerSizes, size }),
				height: theme.fn.size({ sizes: innerSizes, size }),
				position: 'absolute',
				top: `calc(50% - ${theme.fn.size({ sizes: innerSizes, size }) / 2}px)`,
				left: `calc(50% - ${theme.fn.size({ sizes: innerSizes, size }) / 2}px)`
			},
			label: {
				fontSize: theme.fontSizes[size].value,
				marginLeft: labelDirection == 'left' ? `${theme.fn.size({ size, sizes: padding })}px` : 0,
				marginRight: labelDirection == 'right' ? `${theme.fn.size({ size, sizes: padding })}px` : 0,
				'&.disabled': {
					color: theme.fn.themeColor('gray', 5)
				}
			}
		};
	}
);
