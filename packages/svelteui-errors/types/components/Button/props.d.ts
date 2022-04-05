import type { ButtonVariant, LoaderProps } from '@svelteuidev/core/src/lib/Button/Button.styles';
import type { Override, SvelteuiColor, SvelteuiNumberSize, SvelteuiGradient } from '../../index';

export interface ButtonProps {
	[x: string]: any;
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
