import { HTMLAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export type AccordionVariant = 'default' | 'contained' | 'filled' | 'separated';

export type AccordionContext = Writable<{
	currentValue?: string | string[];
	variant?: AccordionVariant;
	order?: 2 | 3 | 4 | 5 | 6;
	radius?: SvelteUINumberSize | number;
	chevron?: Component | HTMLOrSVGElement;
	chevronPosition?: 'left' | 'right';
	chevronSize?: string | number;
	disableChevronRotation?: boolean;
	transitionDuration?: number?;
	updateActive: (value: string) => void;
	isItemActive: (value: string) => boolean;
	getControlsId: (value: string) => string;
	getRegionId: (value: string) => string;
}>;

export interface AccordionProps<T extends boolean = false>
	extends DefaultProps,
		HTMLAttributes<HTMLElement> {
	variant?: AccordionVariant;
	value?: T extends true ? string[] : string;
	defaultValue?: T extends true ? string[] : string;
	radius?: SvelteUINumberSize | number;
	order?: 2 | 3 | 4 | 5 | 6;
	multiple?: T;
	loop?: boolean;
	id?: string;
	chevron?: Component | HTMLOrSVGElement;
	chevronPosition?: 'left' | 'right';
	chevronSize?: string | number;
	disableChevronRotation?: boolean;
	transitionDuration?: number?;
}

export interface AccordionEvents {
	change: CustomEvent<string | string[]>;
	[evt: string]: CustomEvent<any>;
}
