import { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps } from '$lib/styles';

export interface AccordionItemProps extends DefaultProps, HTMLAttributes {
	value?: string;
}
