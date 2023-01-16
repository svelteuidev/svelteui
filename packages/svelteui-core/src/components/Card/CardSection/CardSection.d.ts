import { SvelteComponentTyped } from 'svelte';
import { CardProps } from '../Card';

export interface CardSectionProps extends CardProps {}

export interface CardSectionSlots {
	default: Record<string, never>;
}

export default class CardSection extends SvelteComponentTyped<
	CardSectionProps,
	Record<string, never>,
	CardSectionSlots
> {}
