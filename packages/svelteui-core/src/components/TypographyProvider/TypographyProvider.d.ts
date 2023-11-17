import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor } from '$lib/styles-old';

export interface TypographyProviderProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	underline?: boolean;
	primaryColor?: SvelteUIColor;
}
