import { vFunc, dark } from '$lib/styles';
import type { LoaderProps } from '../Loader/Loader.styles';
import type {
	SvelteuiColor,
	SvelteuiNumberSize,
	SvelteuiGradient,
	DefaultProps
} from '$lib/styles';

export interface ActionIconProps extends DefaultProps {
	root: keyof HTMLElementTagNameMap;
	color: SvelteuiColor;
	variant: ActionIconVariant;
	size: SvelteuiNumberSize;
	radius: SvelteuiNumberSize | number;
	loaderProps: LoaderProps;
	loading: boolean;
	disabled: boolean;
	href: string;
	external: boolean;
}

export interface CloseButtonProps extends ActionIconProps {
	iconSize: SvelteuiNumberSize;
}

export type ActionIconVariant =
	| 'hover'
	| 'filled'
	| 'outline'
	| 'light'
	| 'default'
	| 'transparent';

export interface ActionIconStylesParams {
	color: SvelteuiColor;
	size: SvelteuiNumberSize;
	radius: SvelteuiNumberSize;
}

export const sizes = {
	xs: 18,
	sm: 22,
	md: 28,
	lg: 34,
	xl: 44
};

export function getVariantStyles(color: SvelteuiColor, variant: ActionIconVariant) {
	const ctx: SvelteuiGradient = { from: 'indigo', to: 'cyan', deg: 45 };
	if (variant === 'hover' || variant === 'transparent') {
		return {
			[`${variant}`]: {
				[`${dark.selector} &`]: {
					color: `$${color}800`,
					'&:hover': { backgroundColor: variant === 'transparent' ? null : `$dark800` }
				},
				border: '1px solid transparent',
				backgroundColor: 'transparent',
				color: `$${color}700`,
				'&:hover': { backgroundColor: variant === 'transparent' ? null : `$${color}50` }
			}
		};
	}

	return vFunc(color, ctx);
}
