import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import { Component } from '$lib/internal';

export type AlertVariant = 'filled' | 'outline' | 'light';

export interface AlertProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	title?: string;
	color?: SvelteUIColor;
	radius?: SvelteUINumberSize;
	variant?: AlertVariant;
	icon?: Component | HTMLOrSVGElement;
	iconSize?: number;
	iconProps?: Record<string, unknown>;
	withCloseButton?: boolean;
	closeButtonLabel?: string;
}

export interface AlertEvents {
  close: CustomEvent;
}

export interface AlertSlots {
	default: { slotValue: string };
}

export default class Alert extends SvelteComponentTyped<AlertProps, AlertEvents, AlertSlots> {}
