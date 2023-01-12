import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor } from '$lib/styles';

export interface TypographyProviderProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	underline?: boolean;
	primaryColor?: SvelteUIColor;
}

export interface TypographyProviderSlots {
	default: Record<string, never>;
}

export default class TypographyProvider extends SvelteComponentTyped<
	TypographyProviderProps,
	Record<string, never>,
	TypographyProviderSlots
> {}
