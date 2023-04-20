import { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import { UnstyledButtonProps } from '../Button/UnstyledButton/UnstyledButton';

export interface BurgerProps extends UnstyledButtonProps {
	opened?: boolean;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
}
