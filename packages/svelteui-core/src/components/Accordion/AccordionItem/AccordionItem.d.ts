import { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps } from '$lib/styles';
import { Component } from '$lib/internal';
import { SvelteUINumberSize } from '$lib/styles';
import { ButtonProps } from '../../Button';

export interface AccordionItemProps extends ButtonProps {
	value?: string;
	chevron?: Component | HTMLOrSVGElement;
	disabled?: boolean;
	icon?: Component | HTMLOrSVGElement;
	iconSize?: SvelteUINumberSize;
	iconProps?: Record<string, unknown>;
}
