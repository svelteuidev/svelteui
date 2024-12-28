import type { HTMLSelectAttributes } from 'svelte/elements';

import type { DefaultProps, Override, SvelteUISize } from '$lib/styles';
import type { InputBaseProps } from '../Input/Input';
import type { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';

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
