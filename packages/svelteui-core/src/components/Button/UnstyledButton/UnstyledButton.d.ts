import { SvelteComponentTyped } from 'svelte';
import { ButtonProps, ButtonEvents } from '../Button';

export interface UnstyledButtonProps extends ButtonProps {
	root?: keyof HTMLElementTagNameMap;
}

export interface UnstyledButtonSlots {
	default: Record<string, never>;
}

export default class UnstyledButton extends SvelteComponentTyped<
	UnstyledButtonProps,
	Record<string, never>,
	UnstyledButtonSlots
> {}
