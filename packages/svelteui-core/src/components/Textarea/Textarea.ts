import type { DefaultProps } from '$lib/styles';
import { InputProps } from '../Input/Input';
import { InputWrapperProps } from '../InputWrapper/InputWrapper';

export type TextareaProps = Omit<InputProps, 'size' | 'type'> &
	Omit<InputWrapperProps, 'size'> &
	DefaultProps<HTMLTextAreaElement>;
