import { createStyles } from '$lib/styles-old';
import type { SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles-old';

export interface BadgeStyleParams {
	color: SvelteUIColor;
	size: SvelteUISize;
	radius: SvelteUINumberSize;
	gradientFrom: string;
	gradientTo: string;
	gradientDeg: number;
	fullWidth: boolean;
}

export const sizes = {
	xs: {
		fontSize: 9,
		height: 16
	},
	sm: {
		fontSize: 10,
		height: 18
	},
	md: {
		fontSize: 11,
		height: 20
	},
	lg: {
		fontSize: 13,
		height: 26
	},
	xl: {
		fontSize: 16,
		height: 32
	}
} as const;

export const dotSizes = {
	xs: 4,
	sm: 4,
	md: 6,
	lg: 8,
	xl: 10
};

export default createStyles(
	(
		theme,
		{ fullWidth, radius, size, color, gradientDeg, gradientFrom, gradientTo }: BadgeStyleParams
	) => {
		const dotSize = theme.fn.size({ size, sizes: dotSizes });
		const lightColors = theme.fn.variant({ color, variant: 'light' });
		const filledColors = theme.fn.variant({ color, variant: 'filled' });
		const outlineColors = theme.fn.variant({ color, variant: 'outline' });
		const gradientColors = theme.fn.variant({
			variant: 'gradient',
			gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg }
		});
		const { fontSize, height } = size in sizes ? sizes[size] : sizes.md;

		return {
			root: {
				focusRing: 'auto',
				fontSize,
				height,
				WebkitTapHighlightColor: 'transparent',
				lineHeight: `${height - 2}px`,
				textDecoration: 'none',
				padding: `0 ${theme.fn.size({ size, sizes: theme.space }) / 1.5}px`,
				boxSizing: 'border-box',
				display: fullWidth ? 'flex' : 'inline-flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: fullWidth ? '100%' : 'auto',
				textTransform: 'uppercase',
				borderRadius: theme.fn.radius(radius),
				fontFamily: theme.fonts.standard.value ?? 'sans-serif',
				fontWeight: 700,
				letterSpacing: 0.25,
				cursor: 'default',
				textOverflow: 'ellipsis',
				overflow: 'hidden',

				// As of now the createStyles function has a limitation that doesn't allow you to have multiple properties per component.
				// For an example, I can not make a `root` key, and then a `wrapper` key, and expect it to work. So for now they will be done manually.
				'&.light': {
					[`${theme.dark} &`]: {
						backgroundColor: lightColors.background[0],
						color: lightColors.color[0]
					},
					backgroundColor: lightColors.background[1],
					color: lightColors.color[1],
					border: '1px solid transparent'
				},

				'&.filled': {
					[`${theme.dark} &`]: {
						backgroundColor: filledColors.background[0]
					},
					backgroundColor: filledColors.background[1],
					color: filledColors.color,
					border: '1px solid transparent'
				},

				'&.outline': {
					[`${theme.dark} &`]: {
						color: outlineColors.color[0],
						border: `1px solid ${outlineColors.border[0]}`
					},
					backgroundColor: outlineColors.background,
					color: outlineColors.color[1],
					border: `1px solid ${outlineColors.border[1]}`
				},

				'&.gradient': {
					backgroundImage: gradientColors.background,
					color: gradientColors.color,
					border: 0
				},

				'&.dot': {
					darkMode: {
						color: theme.fn.themeColor('dark', 0),
						border: `1px solid ${theme.fn.themeColor('dark', 3)}`,
						'&::before': {
							backgroundColor: theme.fn.themeColor(color, 4)
						}
					},
					backgroundColor: 'transparent',
					color: theme.fn.themeColor('gray', 7),
					border: `1px solid ${theme.fn.themeColor('gray', 3)}`,
					paddingLeft: theme.fn.size({ size, sizes: theme.space }) / 1.5 - dotSize / 2,

					'&::before': {
						content: '""',
						display: 'block',
						width: dotSize,
						height: dotSize,
						borderRadius: dotSize,
						backgroundColor: theme.fn.themeColor(color, 6),
						marginRight: dotSize
					}
				}
			},
			leftSection: {
				marginRight: parseInt(theme.space.xs.value) / 2
			},
			rightSection: {
				marginLeft: parseInt(theme.space.xs.value) / 2
			},
			inner: {
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis'
			}
		};
	}
);
