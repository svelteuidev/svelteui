import { HTMLInputAttributes, HTMLSelectAttributes, HTMLTextareaAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import { DefaultProps, SvelteUISize, SvelteUINumberSize } from '$lib/styles';

export type InputVariant = 'default' | 'filled' | 'unstyled' | 'headless';

type InputElementType =
	| HTMLInputElement
	| HTMLSelectElement
	| HTMLTextAreaElement
	| HTMLDataListElement;

export interface InputBaseProps extends DefaultProps<InputElementType> {
	icon?: Component | HTMLOrSVGElement;
	iconWidth?: number;
	iconProps?: { size: number; color: 'currentColor' | string };
	showRightSection?: boolean;
	rightSectionWidth?: number;
	rightSectionProps?: Record<string, unknown>;
	wrapperProps?: Record<string, unknown>;
	placeholder?: string;
	id?: string;
	required?: boolean;
	radius?: SvelteUINumberSize;
	variant?: InputVariant;
	disabled?: boolean;
	size?: SvelteUISize;
	root?: Component | keyof HTMLElementTagNameMap;
	value?: string;
}

interface InputPropsInternal extends InputBaseProps {
	invalid?: boolean;
	multiline?: boolean;
	autocomplete?: string;
}

export type InputProps = InputPropsInternal &
	Omit<HTMLInputAttributes, 'size'> &
	Omit<HTMLSelectAttributes, 'size'> &
	HTMLTextareaAttributes;
