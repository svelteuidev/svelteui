import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor } from '$lib/styles';

export interface TypographyProviderProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	underline?: boolean;
	primaryColor?: SvelteUIColor;
}
