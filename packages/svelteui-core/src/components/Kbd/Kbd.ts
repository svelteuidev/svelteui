import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps } from '$lib/styles';

export type KbdPosition = 'right' | 'center' | 'left' | 'apart';

export interface KbdProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	children?: Snippet;
	[key: string]: any;
}
