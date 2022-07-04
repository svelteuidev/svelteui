import { createStyles } from '$lib/styles';
import type { Writable } from 'svelte/store';
import type { DefaultProps, SvelteUINumberSize, SvelteUIColor } from '$lib/styles';

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

export default createStyles((_, { orientation, tabPadding }: TabsStyleParams) => {
	return {
		root: {
			display: orientation === 'vertical' ? 'flex' : 'block'
		},
		wrapper: {},
		tabs: {},
		content: {}
	};
});
