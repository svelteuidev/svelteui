import { HTMLAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import { DefaultProps, SvelteUIColor } from '$lib/styles';
import { TabsVariant } from '../Tabs';

export interface TabProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	active?: boolean;
	icon?: Component | HTMLOrSVGElement;
	iconProps?: Record<string, unknown>;
	label?: Component | string;
	color?: SvelteUIColor;
	variant?: TabsVariant;
	orientation?: 'horizontal' | 'vertical';
	tabKey?: string;
	disabled?: boolean;
}
