import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps } from '$lib/styles';

export interface CenterProps extends DefaultProps<HTMLButtonElement>, HTMLAttributes<HTMLElement> {
	inline?: boolean;
	children?: Snippet;
	[key: string]: any;
}
