import { SvelteComponentTyped } from 'svelte';
import { Override } from '$lib/styles';
import { InputProps, InputEvents } from "../Input/Input";
import { InputWrapperProps } from "../InputWrapper/InputWrapper";

export interface TextInputProps extends InputProps, Omit<InputWrapperProps, 'element' | 'size'> {
	overrideInput?: Override['props'];
}

export interface TextInputEvents extends InputEvents {}

export interface TextInputSlots {
	rightSection: { slotValue: string };
}

export default class TextInput extends SvelteComponentTyped<TextInputProps, TextInputEvents, TextInputSlots> {}
