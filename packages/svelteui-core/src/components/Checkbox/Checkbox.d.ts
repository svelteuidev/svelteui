import { SvelteComponentTyped } from 'svelte';
import { HTMLInputAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles';

export interface CheckboxProps extends DefaultProps<HTMLInputElement>, HTMLInputAttributes {
	color?: SvelteUIColor;
	id?: string;
	checked?: boolean;
	disabled?: boolean;
	indeterminate?: boolean;
	value?: string;
	label?: Component | string;
	radius?: SvelteUINumberSize | number;
	size?: SvelteUISize;
	transitionDuration?: number;
	wrapperProps?: { [key: string]: any };
}

export interface CheckboxEvents {
  input: InputEvent;
  change: InputEvent;
  click: MouseEvent;
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface CheckboxSlots {
  default: { slotValue: string };
}

export default class Checkbox extends SvelteComponentTyped<CheckboxProps, CheckboxEvents, CheckboxSlots> {}
