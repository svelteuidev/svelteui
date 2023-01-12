import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { Writable } from 'svelte/store';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export type TabsVariant = 'default' | 'outline' | 'pills' | 'unstyled';

export type TabsContext = Writable<{
	active: number;
	color: SvelteUIColor;
	variant: TabsVariant;
	orientation: 'horizontal' | 'vertical';
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
}

export interface TabsSlots {
	default: Record<string, never>;
}

export default class Tabs extends SvelteComponentTyped<TabsProps, TabsEvents, TabsSlots> {}
