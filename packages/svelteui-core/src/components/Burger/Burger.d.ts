import { SvelteUIColor, SvelteUINumberSize } from '$lib/styles-old';
import { UnstyledButtonProps } from '../Button/UnstyledButton/UnstyledButton';

export interface BurgerProps extends UnstyledButtonProps {
	opened?: boolean;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
}
