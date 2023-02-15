import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { Writable } from 'svelte/store';

export type BreadcrumbContext = Writable<{
	separator?: string;
	size?: SvelteUINumberSize;
	color?: SvelteUIColor;
}>;

export interface BreadcrumbProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	value?: number;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	label?: string;
	separator?: string;
}
