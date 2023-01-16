import { SvelteComponentTyped } from 'svelte';
import { DefaultProps, Override, SvelteUISize } from '$lib/styles';
import { InputBaseProps } from '../Input/Input';
import { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';
import type { HTMLSelectAttributes } from 'svelte/elements';

export interface SelectItem {
	value: string;
	label?: string;
	disabled?: boolean;
	group?: string;
	[key: string]: any;
}

interface NativeSelectPropsInternal extends DefaultProps<HTMLInputElement> {
	id?: string;
	placeholder?: string;
	data?: (string | SelectItem)[];
	inputStyle?: Override['props'];
	wrapperProps?: Record<string, unknown>;
	size?: SvelteUISize;
}

export type NativeSelectProps = NativeSelectPropsInternal &
	InputBaseProps &
	Omit<HTMLSelectAttributes, 'size'> &
	InputWrapperBaseProps;

export interface NativeSelectEvents {
	change: InputEvent;
	input: InputEvent;
}

export interface NativeSelectSlots {
	rightSection: { size: number; color: 'currentColor' | string };
}

export default class NativeSelect extends SvelteComponentTyped<
	NativeSelectProps,
	NativeSelectEvents,
	NativeSelectSlots
> {}
