import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { Component } from '$lib/internal';
import type { DefaultProps, SvelteUIColor } from '$lib/styles';
import type { TabsVariant } from '../Tabs';

export interface TabProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	active?: boolean;
	iconComponent?: Component | HTMLOrSVGElement;
	iconProps?: Record<string, unknown>;
	labelText?: Component | string;
	color?: SvelteUIColor;
	variant?: TabsVariant;
	orientation?: 'horizontal' | 'vertical';
	tabKey?: string;
	disabled?: boolean;
	label?: Snippet;
	icon?: Snippet;
	children?: Snippet;
	[key: string]: any;
}
