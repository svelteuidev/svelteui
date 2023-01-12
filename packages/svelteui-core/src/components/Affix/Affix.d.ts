import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps } from '$lib/styles';

export interface AffixProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	target?: HTMLElement | string;
	zIndex?: number;
	position?: {
		top?: string | number;
		left?: string | number;
		bottom?: string | number;
		right?: string | number;
	};
}

export interface AffixSlots {
	default: Record<string, never>;
}

export default class Affix extends SvelteComponentTyped<
	AffixProps,
	Record<string, never>,
	AffixSlots
> {}
