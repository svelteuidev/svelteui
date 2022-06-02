import type { DefaultProps, Override, SvelteUISize } from '$lib/styles';
import type { InputBaseProps } from '../Input/Input.styles';
import type { InputWrapperBaseProps } from '../InputWrapper/InputWrapper.styles';

export interface SelectItem {
	value: string;
	label?: string;
	disabled?: boolean;
	group?: string;
	[key: string]: any;
}

export interface NativeSelectProps extends DefaultProps, InputBaseProps, InputWrapperBaseProps {
	id: string;
	placeholder: string;
	data: (string | SelectItem)[];
	inputStyle: Override['props'];
	wrapperProps: Record<string, unknown>;
	size: SvelteUISize;
}
