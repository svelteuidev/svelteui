import { SvelteComponentTyped } from 'svelte';
import { DefaultProps, Override, SvelteUISize } from '$lib/styles';
import { InputBaseProps } from '../Input/Input';
import { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';

export interface SelectItem {
	value: string;
	label?: string;
	disabled?: boolean;
	group?: string;
	[key: string]: any;
}

export interface NativeSelectProps
	extends DefaultProps<HTMLInputElement>,
		InputBaseProps,
		InputWrapperBaseProps {
	id?: string;
	placeholder?: string;
	data?: (string | SelectItem)[];
	inputStyle?: Override['props'];
	wrapperProps?: Record<string, unknown>;
	size?: SvelteUISize;
}

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
