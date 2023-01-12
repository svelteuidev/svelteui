import { SvelteComponentTyped } from 'svelte';
import { HTMLInputAttributes } from 'svelte/elements';
import { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export type SwitchTimingFunction =
	| 'linear'
	| 'ease'
	| 'ease-in'
	| 'ease-out'
	| 'ease-in-out'
	| 'step-start'
	| 'step-end';

export interface SwitchProps extends DefaultProps<HTMLInputElement>, HTMLInputAttributes {
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	radius?: SvelteUINumberSize;
	transitionFunction?: SwitchTimingFunction;
	className?: string;
	id?: string;
	label?: string;
	onLabel?: string;
	offLabel?: string;
	disabled?: boolean;
	checked?: boolean;
}

export interface SwitchEvents {
	input: InputEvent;
	change: InputEvent;
}

export interface SwitchSlots {
	default: Record<string, never>;
}

export default class Switch extends SvelteComponentTyped<SwitchProps, SwitchEvents, SwitchSlots> {}
