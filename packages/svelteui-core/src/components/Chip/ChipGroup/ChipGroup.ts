import type { HTMLAttributes } from 'svelte/elements';
import type { CSS, DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';
import type { GroupPosition } from '../../Group/Group';

export interface ChipGroupProps<T = boolean> extends DefaultProps, Omit<HTMLAttributes<HTMLElement>, 'onchange'> {
	color?: SvelteUIColor;
	items?: { label: string; value: string }[];
	value?: T extends true ? string[] : string;
	label?: string;
	multiple?: T;
	disabled?: boolean;
	variant?: 'outline' | 'filled';
	size?: SvelteUISize;
	radius?: SvelteUINumberSize;
	position?: GroupPosition;
	direction?: 'row' | 'column';
	align?: CSS['alignItems'];
	spacing?: SvelteUINumberSize;
	wrapperProps?: Record<string, any>;
	onchange?: (value: (T extends true ? string[] : string)) => void;
	[key: string]: any
}

export interface ChipGroupEvents<T = boolean> {
	change: CustomEvent<T extends true ? string[] : string>;
	[evt: string]: CustomEvent<any>;
}
