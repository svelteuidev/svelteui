import type { ButtonVariant, LoaderProps } from '$lib/Button/Button.styles';
import type {
	Override,
	SvelteuiColor,
	SvelteuiNumberSize,
	SvelteuiGradient
} from '$lib/_styles/types';

export interface ButtonProps {
	override?: Override['props'];
	variant?: ButtonVariant;
	color?: SvelteuiColor;
	size?: SvelteuiNumberSize;
	radius?: SvelteuiNumberSize | number;
	type?: 'button' | 'reset' | 'submit' | 'menu';
	gradient?: SvelteuiGradient;
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
