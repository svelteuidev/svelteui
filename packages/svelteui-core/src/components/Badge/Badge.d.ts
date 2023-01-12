import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor, SvelteUIGradient, SvelteUINumberSize, SvelteUISize } from '$lib/styles';

export type BadgeVariant = 'light' | 'filled' | 'outline' | 'dot' | 'gradient';

export interface BadgeProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	color?: SvelteUIColor;
	variant?: BadgeVariant;
	gradient?: SvelteUIGradient;
	size?: SvelteUISize;
	radius?: SvelteUINumberSize;
	fullWidth?: boolean;
}

export interface BadgeEvents {
  click: MouseEvent;
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface BadgeSlots {
	default: { slotValue: string };
	leftSection: { slotValue: string };
	rightSection: { slotValue: string };
}

export default class Badge extends SvelteComponentTyped<BadgeProps, BadgeEvents, BadgeSlots> {}
