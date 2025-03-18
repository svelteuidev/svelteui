import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { UnstyledButtonProps } from '../Button/UnstyledButton/UnstyledButton';

export interface BurgerProps extends UnstyledButtonProps {
	opened?: boolean;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	[key: string]: any;
}
