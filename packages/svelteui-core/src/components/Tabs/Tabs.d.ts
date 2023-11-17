import { HTMLAttributes } from 'svelte/elements';
import { Writable } from 'svelte/store';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles-old';

export type TabsVariant = 'default' | 'outline' | 'pills' | 'unstyled';

export type TabsContext = Writable<{
	[tabsId: string]: {
		active: number;
		color: SvelteUIColor;
		variant: TabsVariant;
		orientation: 'horizontal' | 'vertical';
	};
}>;

export interface TabsProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	active?: number;
	color?: SvelteUIColor;
	grow?: boolean;
	initialTab?: number;
	orientation?: 'horizontal' | 'vertical';
	position?: 'right' | 'center' | 'left' | 'apart';
	tabPadding?: SvelteUINumberSize;
	variant?: TabsVariant;
}

export interface TabsEvents {
	change: CustomEvent<{ index: number; key: string }>;
	[evt: string]: CustomEvent<any>;
}
