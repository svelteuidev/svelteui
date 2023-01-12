import type { Override } from '$lib/styles';
import type { InputProps } from '../Input/Input.styles';
import type { InputWrapperProps } from '../InputWrapper/InputWrapper.styles';

export interface TextInputProps extends InputProps, Omit<InputWrapperProps, 'element' | 'size'> {
	overrideInput?: Override['props'];
}
