import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';
import type { Component } from '$lib/internal';

export type AccordionVariant = 'default' | 'contained' | 'filled' | 'separated';

export type AccordionValue<Multiple> = Multiple extends true ? string[] : string | null;

export type AccordionContext<Multiple extends boolean = false> = {
	currentValue?: AccordionValue<Multiple>;
	variant?: AccordionVariant;
	order?: 2 | 3 | 4 | 5 | 6;
	radius?: SvelteUINumberSize | number;
	chevronComponent?: Component | HTMLOrSVGElement;
	chevronPosition?: 'left' | 'right';
	chevronSize?: string | number;
	disableChevronRotation?: boolean;
	transitionDuration?: number;
	updateActive: (value: string) => void;
	isItemActive: (value: string) => boolean;
	getControlsId: (value: string) => string;
	getRegionId: (value: string) => string;
	chevron?: Snippet;
};

export interface AccordionProps<Multiple extends boolean = false>
	extends DefaultProps,
		Omit<HTMLAttributes<HTMLElement>, 'onchange'> {
	variant?: AccordionVariant;
	value?: AccordionValue<Multiple>;
	defaultValue?: AccordionValue<Multiple>;
	radius?: SvelteUINumberSize | number;
	order?: 2 | 3 | 4 | 5 | 6;
	multiple?: Multiple;
	loop?: boolean;
	id?: string;
	chevronComponent?: Component | HTMLOrSVGElement;
	chevronPosition?: 'left' | 'right';
	chevronSize?: string | number;
	disableChevronRotation?: boolean;
	transitionDuration?: number;
	onchange?: (value: AccordionValue<Multiple>) => void;
	chevron?: Snippet;
	children: Snippet;
	[key: string]: any;
}
