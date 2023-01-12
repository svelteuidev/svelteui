import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor } from '$lib/styles';

export interface CodeProps
	extends DefaultProps<HTMLPreElement | HTMLElement>,
		HTMLAttributes<HTMLPreElement | HTMLElement> {
	color?: SvelteUIColor;
	block?: boolean;
	width?: number;
	copy?: boolean;
	message?: string;
	noMono?: boolean;
}

export interface CodeEvents {
	useclipboard: CustomEvent<string>;
	'useclipboard-error': CustomEvent<any>;
}

export interface CodeSlots {
	default: Record<string, never>;
}

export default class Code extends SvelteComponentTyped<CodeProps, CodeEvents, CodeSlots> {}
