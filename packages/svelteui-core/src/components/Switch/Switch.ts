import { HTMLInputAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export type SwitchTimingFunction =
	| 'linear'
	| 'ease'
	| 'ease-in'
	| 'ease-out'
	| 'ease-in-out'
	| 'step-start'
	| 'step-end';

export interface SwitchProps
	extends DefaultProps<HTMLInputElement>,
		Omit<HTMLInputAttributes, 'size'> {
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	radius?: SvelteUINumberSize;
	insideLabelSize?: SvelteUINumberSize;
	transitionFunction?: SwitchTimingFunction;
	className?: string;
	id?: string;
	label?: string;
	onLabel?: string;
	offLabel?: string;
	disabled?: boolean;
	checked?: boolean;
}
