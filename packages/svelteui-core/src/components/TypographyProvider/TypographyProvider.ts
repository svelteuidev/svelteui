import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { DefaultProps, SvelteUIColor } from '$lib/styles';

export interface TypographyProviderProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	underline?: boolean;
	primaryColor?: SvelteUIColor;
	children?: Snippet;
	[key: string]: any
}
