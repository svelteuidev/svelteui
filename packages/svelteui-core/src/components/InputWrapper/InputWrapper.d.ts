import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUISize } from '$lib/styles';

export interface InputWrapperBaseProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	label?: string;
	description?: string;
	error?: string | boolean;
	required?: boolean;
	labelProps?: Record<string, unknown>;
	descriptionProps?: Record<string, unknown>;
	errorProps?: Record<string, unknown>;
}

export interface InputWrapperProps extends InputWrapperBaseProps {
	id?: string;
	labelElement?: 'label' | 'div';
	size?: SvelteUISize;
}
