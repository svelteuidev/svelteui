import type { Override } from '$lib/styles';
import type { InputProps } from '../Input/Input.styles';
import type { InputWrapperProps } from '../InputWrapper/InputWrapper.styles';

export interface TextInputProps extends InputProps, InputWrapperProps {
	overrideInput?: Override['props'];
}
