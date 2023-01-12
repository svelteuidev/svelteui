import { SvelteComponentTyped } from 'svelte';
import { HTMLInputAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import { DefaultProps, SvelteUISize, SvelteUINumberSize } from '$lib/styles';

export type InputVariant = 'default' | 'filled' | 'unstyled' | 'headless';

export interface InputBaseProps extends DefaultProps<HTMLInputElement>, HTMLInputAttributes {
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

export interface InputProps extends InputBaseProps {
	invalid?: boolean;
	multiline?: boolean;
	autocomplete?: string;
}

export interface InputEvents {
	change: InputEvent;
}

export interface InputSlots {
	default: Record<string, never>;
	rightSection: Record<string, never>;
}

export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {}
