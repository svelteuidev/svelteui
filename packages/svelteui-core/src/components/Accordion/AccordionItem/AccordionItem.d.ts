import { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps } from '$lib/styles-old';
import { Component } from '$lib/internal';
import { SvelteUINumberSize } from '$lib/styles-old';
import { ButtonProps } from '../../Button';

export interface AccordionItemProps extends ButtonProps {
	value?: string;
	chevron?: Component | HTMLOrSVGElement;
	disabled?: boolean;
}
