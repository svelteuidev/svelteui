import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { DefaultProps } from '$lib/styles';

export interface PortalProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	target?: HTMLElement | string;
	position?: string;
	zIndex?: number;
	children?: Snippet;
	[key: string]: any
}
