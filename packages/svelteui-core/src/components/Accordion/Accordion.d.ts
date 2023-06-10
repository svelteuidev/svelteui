import { HTMLAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export type AccordionVariant = 'default' | 'contained' | 'filled' | 'separated';

export type AccordionContext = Writable<{
	value?: string | string[];
	order?: 2 | 3 | 4 | 5 | 6;
	radius?: SvelteUINumberSize | number;
	chevron?: Component | HTMLOrSVGElement;
	chevronPosition?: 'left' | 'right';
	chevronSize?: string | number;
	disableChevronRotation?: boolean;
	transitionDuration?: number?;
	isItemActive: () => boolean;
}>;

export interface AccordionProps extends DefaultProps, HTMLAttributes {
	variant?: AccordionVariant;
	value?: string | string[];
	defaultValue?: string | string[];
	radius?: SvelteUINumberSize | number;
	order?: 2 | 3 | 4 | 5 | 6;
	multiple?: boolean;
	loop?: boolean;
	id?: string;
	chevron?: Component | HTMLOrSVGElement;
	chevronPosition?: 'left' | 'right';
	chevronSize?: string | number;
	disableChevronRotation?: boolean;
	transitionDuration?: number?;
}
