import { HTMLButtonAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export interface BurgerProps extends DefaultProps<HTMLButtonElement>, HTMLButtonAttributes {
	opened?: boolean;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
}
