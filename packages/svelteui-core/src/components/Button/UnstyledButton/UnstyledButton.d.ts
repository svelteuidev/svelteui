import { SvelteComponentTyped } from 'svelte';
import { ButtonProps, type ButtonEvents } from '../Button';

export interface UnstyledButtonProps extends ButtonProps {
	root?: keyof HTMLElementTagNameMap;
}

export interface UnstyledButtonEvents extends ButtonEvents {};

export interface UnstyledButtonSlots {
  default: { slotValue: string };
}

export default class UnstyledButton extends SvelteComponentTyped<UnstyledButtonProps, UnstyledButtonEvents, UnstyledButtonSlots> {}
