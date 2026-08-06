import type { ButtonProps } from '../Button';

export interface UnstyledButtonProps extends ButtonProps {
	root?: keyof HTMLElementTagNameMap;
}
