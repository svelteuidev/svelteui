import { createStyles } from '$lib/styles';
import type { Writable } from 'svelte/store';
import type {
	DefaultProps,
	SvelteUINumberSize,
	SvelteUIColor,
	SvelteUITheme,
	VariantThemeFunction
} from '$lib/styles';

export type TabsContext = Writable<{
	active: number;
	color: SvelteUIColor;
	variant: TabsVariant;
	orientation: 'horizontal' | 'vertical';
}>;

export interface TabsProps extends DefaultProps {
	active?: number;
	color?: SvelteUIColor;
	grow?: boolean;
	initialTab?: number;
	orientation?: 'horizontal' | 'vertical';
	position?: 'right' | 'center' | 'left' | 'apart';
	tabPadding?: SvelteUINumberSize;
	variant?: TabsVariant;
}

export type TabsVariant = 'default' | 'outline' | 'pills' | 'unstyled';

export interface TabsStyleParams {
	orientation?: 'horizontal' | 'vertical';
	tabPadding?: SvelteUINumberSize;
}

export const getVariantStyles = (
	orientation: 'horizontal' | 'vertical',
	theme: SvelteUITheme
): VariantThemeFunction => {
	return {
		default: {
			[orientation === 'horizontal'
				? 'borderBottom'
				: 'borderRight']: `2px solid ${theme.fn.themeColor('gray', 2)}`,
			darkMode: {
				[orientation === 'horizontal'
					? 'borderBottom'
					: 'borderRight']: `2px solid ${theme.fn.themeColor('dark', 4)}`
			},

			[`& .tabs`]: {
				[orientation === 'horizontal' ? 'marginBottom' : 'marginRight']: -2
			}
		},
		outline: {
			[orientation === 'horizontal'
				? 'borderBottom'
				: 'borderRight']: `1px solid ${theme.fn.themeColor('gray', 2)}`,
			darkMode: {
				[orientation === 'horizontal'
					? 'borderBottom'
					: 'borderRight']: `1px solid ${theme.fn.themeColor('dark', 4)}`
			},

			[`& .tabs`]: {
				[orientation === 'horizontal' ? 'marginBottom' : 'marginRight']: -1
			}
		},
		pills: {
			marginRight: orientation === 'vertical' ? '20' : '0'
		}
	};
};

export default createStyles((theme, { orientation, tabPadding }: TabsStyleParams) => {
	return {
		root: {
			display: orientation === 'vertical' ? 'flex' : 'block'
		},
		wrapper: {},
		tabs: {},
		content: {
			[orientation === 'horizontal' ? 'paddingTop' : 'paddingLeft']: theme.fn.size({
				size: tabPadding,
				sizes: theme.space
			})
		},
		...getVariantStyles(orientation, theme)
	};
});
