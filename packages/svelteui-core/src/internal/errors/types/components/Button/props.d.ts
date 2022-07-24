import type { ButtonVariant, LoaderProps } from '$lib/components/Button/Button.styles';
import type {
	Override,
	SvelteUIColor,
	SvelteUINumberSize,
	SvelteUIGradient
} from '$lib/styles/types';

export interface ButtonProps {
	override?: Override['props'];
	variant?: ButtonVariant;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	radius?: SvelteUINumberSize | number;
	type?: 'button' | 'reset' | 'submit' | 'menu';
	gradient?: SvelteUIGradient;
	loaderPosition?: 'left' | 'right';
	loaderProps?: LoaderProps;
	class?: string;
	href?: string;
	external?: boolean;
	disabled?: boolean;
	compact?: boolean;
	loading?: boolean;
	uppercase?: boolean;
	fullSize?: boolean;
}
