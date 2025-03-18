import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { Component } from '$lib/internal';

export type AlertVariant = 'filled' | 'outline' | 'light';

export interface AlertProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	title?: string;
	color?: SvelteUIColor;
	radius?: SvelteUINumberSize;
	variant?: AlertVariant;
	icon?: Snippet;
	iconComponent?: Component | HTMLOrSVGElement;
	iconSize?: SvelteUINumberSize;
	iconProps?: Record<string, unknown>;
	withCloseButton?: boolean;
	closeButtonLabel?: string;
	onclose?: () => void;
	children?: Snippet;
	[key: string]: any;
}
