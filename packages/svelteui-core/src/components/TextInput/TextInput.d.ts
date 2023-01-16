import { SvelteComponentTyped } from 'svelte';
import { InputProps, InputEvents } from '../Input/Input';
import { InputWrapperProps } from '../InputWrapper/InputWrapper';

export type TextInputProps = InputProps & InputWrapperProps;

export interface TextInputEvents extends InputEvents {}

export interface TextInputSlots {
	rightSection: Record<string, never>;
}

export default class TextInput extends SvelteComponentTyped<
	TextInputProps,
	TextInputEvents,
	TextInputSlots
> {}
