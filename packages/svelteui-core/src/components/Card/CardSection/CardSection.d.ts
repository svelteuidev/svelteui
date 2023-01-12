import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles';
import type { CardProps } from '../Card';

export interface CardSectionProps extends CardProps {}

export interface CardSectionSlots {
	default: Record<string, never>;
}

export default class CardSection extends SvelteComponentTyped<
	CardSectionProps,
	Record<string, never>,
	CardSectionSlots
> {}
