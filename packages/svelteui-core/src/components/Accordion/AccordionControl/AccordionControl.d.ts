import { HTMLButtonAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import { SvelteUINumberSize } from '$lib/styles';
import { ButtonProps } from '../../Button';

export interface AccordionControlProps extends ButtonProps {
	chevron?: Component | HTMLOrSVGElement;
	disabled?: boolean;
	icon?: Component | HTMLOrSVGElement;
	iconSize?: SvelteUINumberSize;
	iconProps?: Record<string, unknown>;
}
