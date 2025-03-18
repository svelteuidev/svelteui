import type { Snippet } from 'svelte';

import type { ButtonProps } from '../../Button';
import type { Component } from '$lib/internal';

export interface AccordionItemProps extends ButtonProps {
	value?: string;
	disabled?: boolean;
	chevronComponent?: Component | HTMLOrSVGElement;
	chevron?: Snippet;
	control?: Snippet<[boolean]>;
}
