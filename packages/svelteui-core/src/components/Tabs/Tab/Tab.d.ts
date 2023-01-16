import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import { DefaultProps, SvelteUIColor } from '$lib/styles';
import type { TabsVariant } from '../Tabs';

export interface TabProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	active?: boolean;
	icon?: Component | HTMLOrSVGElement;
	iconProps?: Record<string, unknown>;
	label?: Component | string;
	color?: SvelteUIColor;
	variant?: TabsVariant;
	orientation?: 'horizontal' | 'vertical';
	tabKey?: string;
}

export interface TabEvents {
	change: CustomEvent<{ index: number; key: string }>;
}

export interface TabSlots {
	default: Record<string, never>;
	label: Record<string, never>;
	icon: { color: SvelteUIColor } & Record<string, unknown>;
}

export default class Tab extends SvelteComponentTyped<TabProps, TabEvents, TabSlots> {}
