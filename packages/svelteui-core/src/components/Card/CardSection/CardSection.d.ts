import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles';
import type { CardProps } from '../Card';

export interface CardSectionProps extends CardProps {};

export interface CardSectionEvents {}

export interface CardSectionSlots {
  default: { slotValue: string };
}

export default class CardSection extends SvelteComponentTyped<CardSectionProps, CardSectionEvents, CardSectionSlots> {}
