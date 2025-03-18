import type { DefaultProps } from '$lib/styles';
import type { InputProps } from '../Input/Input';
import type { InputWrapperProps } from '../InputWrapper/InputWrapper';

export type TextareaProps<T = string> = Omit<InputProps<T>, 'size' | 'type'> &
	Omit<InputWrapperProps, 'size'> &
	DefaultProps<HTMLTextAreaElement>;
