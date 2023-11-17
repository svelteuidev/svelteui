import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize, SvelteUIShadow } from '$lib/styles-old';

export interface PaperProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	shadow?: SvelteUIShadow;
	radius?: SvelteUINumberSize;
	withBorder?: boolean;
	padding?: SvelteUINumberSize;
}
