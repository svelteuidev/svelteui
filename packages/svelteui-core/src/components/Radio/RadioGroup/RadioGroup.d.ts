import { HTMLAttributes } from 'svelte/elements';
import {
	CSS,
	DefaultProps,
	SvelteUIColor,
	SvelteUINumberSize,
	SvelteUISize
} from '$lib/styles-old';
import { GroupPosition } from '../../Group/Group';

export interface RadioGroupProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	items: { label: string; value: string }[];
	group?: string;
	color?: SvelteUIColor;
	value?: string;
	label?: string;
	disabled?: boolean;
	size?: SvelteUISize;
	radius?: SvelteUINumberSize;
	position?: GroupPosition;
	direction?: 'row' | 'column';
	labelDirection?: 'right' | 'left';
	align?: CSS['alignItems'];
	spacing?: SvelteUINumberSize;
	name?: string;
}

export interface RadioGroupEvents {
	change: CustomEvent<string>;
	[evt: string]: CustomEvent<any>;
}
