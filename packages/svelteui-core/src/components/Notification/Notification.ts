import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { Component } from '$lib/internal';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { CloseButtonProps } from '../ActionIcon/CloseButton/CloseButton';

export interface NotificationProps
	extends DefaultProps<HTMLInputElement>,
		HTMLAttributes<HTMLElement> {
	title?: string;
	color?: SvelteUIColor;
	radius?: SvelteUINumberSize;
	loading?: boolean;
	iconComponent?: Component | HTMLOrSVGElement;
	iconSize?: number;
	iconProps?: Record<string, unknown>;
	withCloseButton?: boolean;
	closeButtonLabel?: string;
	closeButtonProps?: CloseButtonProps;
	onclose?: () => void;
	icon?: Snippet;
	children?: Snippet;
	[key: string]: any;
}

export interface NotificationEvents {
	close: CustomEvent;
	[evt: string]: CustomEvent<any>;
}
