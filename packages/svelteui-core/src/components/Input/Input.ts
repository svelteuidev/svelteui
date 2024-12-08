import type { Snippet } from 'svelte';
import type { HTMLInputAttributes, HTMLSelectAttributes, HTMLTextareaAttributes } from 'svelte/elements';
import type { Component } from '$lib/internal';
import type { DefaultProps, SvelteUISize, SvelteUINumberSize, CSS } from '$lib/styles';

export type InputVariant = 'default' | 'filled' | 'unstyled' | 'headless';

type InputElementType =
	| HTMLInputElement
	| HTMLSelectElement
	| HTMLTextAreaElement
	| HTMLDataListElement;

export interface InputBaseProps<T = string> extends DefaultProps<InputElementType> {
	iconComponent?: Component | HTMLOrSVGElement;
	iconWidth?: number;
	iconProps?: { size: number; color: 'currentColor' | string };
	showRightSection?: boolean;
	rightSectionWidth?: number | string;
	rightSectionProps?: Record<string, unknown>;
	wrapperProps?: Record<string, unknown>;
	placeholder?: string;
	id?: string;
	required?: boolean;
	radius?: SvelteUINumberSize;
	variant?: InputVariant;
	disabled?: boolean;
	size?: SvelteUISize;
	resize?: CSS['resize'];
	noPointerEventsRightSection?: boolean;
	root?: Component | keyof HTMLElementTagNameMap;
	value?: T;
	icon?: Snippet;
	rightSection?: Snippet;
	children?: Snippet;
	[key: string]: any
}

interface InputPropsInternal<T = string> extends InputBaseProps<T> {
	invalid?: boolean;
	multiline?: boolean;
	autocomplete?: string;
}

export type InputProps<T = string> = InputPropsInternal<T> &
	Omit<HTMLInputAttributes, 'size'> &
	Omit<HTMLSelectAttributes, 'size'> &
	HTMLTextareaAttributes;
