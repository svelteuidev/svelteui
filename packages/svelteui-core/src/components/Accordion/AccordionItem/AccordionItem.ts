import type { Snippet } from 'svelte';

import type { ButtonProps } from '../../Button';

export interface AccordionItemProps extends ButtonProps {
	value?: string;
	disabled?: boolean;
	chevron?: Snippet;
	control?: Snippet<[boolean]>;
}
