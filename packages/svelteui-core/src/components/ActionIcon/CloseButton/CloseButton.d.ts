import { SvelteComponentTyped } from 'svelte';
import { HTMLButtonAttributes } from 'svelte/elements';
import type { SvelteUINumberSize } from '$lib/styles';
import type { ActionIconProps, ActionIconEvents, ActionIconSlots } from '../ActionIcon';

export interface CloseButtonProps extends ActionIconProps {
	iconSize?: SvelteUINumberSize;
}

export default class CloseButton extends SvelteComponentTyped<
	CloseButtonProps,
	ActionIconEvents,
	ActionIconSlots,
	HTMLButtonAttributes
> {}
