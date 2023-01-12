import { createStyles } from '$lib/styles';
import type { SvelteUIColor, SvelteUITheme, VariantThemeFunction } from '$lib/styles';

export interface TabStyleParams {
	color?: SvelteUIColor;
	orientation?: 'horizontal' | 'vertical';
}

export const getVariantStyles = (
	color: SvelteUIColor,
	orientation: 'horizontal' | 'vertical',
	theme: SvelteUITheme
): VariantThemeFunction => {
	return {
		'&.default': {
			transition: 'border-color 150ms ease, color 150ms ease',
			color: theme.colors.black.value,
			[orientation === 'horizontal' ? 'borderBottom' : 'borderRight']: '2px solid transparent',
			'&.active': {
				color: theme.fn.themeColor(color, 7),
				[orientation === 'horizontal' ? 'borderBottomColor' : 'borderRightColor']:
					theme.fn.themeColor(color, 7),
				darkMode: {
					color: theme.fn.themeColor(color, 4),
					[orientation === 'horizontal' ? 'borderBottomColor' : 'borderRightColor']:
						theme.fn.themeColor(color, 4)
				}
			}
		},
		'&.outline': {
			borderBottomLeftRadius: orientation === 'vertical' ? theme.radii.sm.value : '0',
			borderTopRightRadius: orientation === 'horizontal' ? theme.radii.sm.value : '0',
			borderTopLeftRadius: theme.radii.sm.value,
			border: '1px solid transparent',
			borderBottom: orientation === 'horizontal' ? '0' : '1px solid transparent',
			borderRight: orientation === 'vertical' ? '0' : '1px solid transparent',
			color: theme.fn.themeColor('gray', 7),
			'&.active': {
				color: theme.colors.black.value,
				borderColor: theme.fn.themeColor('gray', 2),
				background: theme.colors.white.value,
				darkMode: {
					color: theme.fn.themeColor('dark', 0),
					borderColor: theme.fn.themeColor('dark', 4),
					background: theme.fn.themeColor('dark', 7)
				}
			}
		},
		'&.pills': {
			borderRadius: theme.radii.sm.value,
			backgroundColor: 'transparent',
			color: theme.fn.themeColor('gray', 7),
			fontSize: theme.fontSizes.sm.value,
			height: 'auto',
			padding: `${theme.space.xsPX} ${theme.space.lgPX}`,
			fontWeight: '500',
			'&:hover': {
				background: theme.fn.themeColor('gray', 0),
				darkMode: {
					background: theme.fn.themeColor('dark', 6)
				}
			},
			'&.active': {
				color: theme.colors.black.value,
				background: theme.fn.themeColor('gray', 0),
				darkMode: {
					color: theme.colors.white.value,
					background: theme.fn.themeColor('dark', 6)
				}
			}
		}
	};
};

export default createStyles((theme, { color, orientation }: TabStyleParams) => {
	return {
		root: {
			WebkitTapHighlightColor: 'transparent',
			boxSizing: 'border-box',
			display: 'block',
			height: 40,
			backgroundColor: 'transparent',
			border: 0,
			padding: `0 ${theme.space.mdPX}`,
			fontSize: theme.fontSizes.sm,
			cursor: 'pointer',
			width: orientation === 'vertical' ? '100%' : 'auto',
			darkMode: {
				color: theme.colors.white.value
			},
			...getVariantStyles(color, orientation, theme),
			'&:disabled': {
				cursor: 'not-allowed',
				color: theme.fn.themeColor('gray', 5),
				darkMode: {
					color: theme.fn.themeColor('dark', 3)
				}
			}
		},
		inner: {
			boxSizing: 'border-box',
			display: 'flex',
			alignItems: 'center',
			justifyContent: orientation === 'horizontal' ? 'center' : 'flex-start',
			lineHeight: 1,
			height: '100%'
		},
		icon: {
			'&:not(:only-child)': {
				marginRight: theme.space.xsPX
			},
			'& *': {
				display: 'block'
			}
		},
		label: {},
		tabContent: {
			display: 'none'
		}
	};
});
