import { vFunc, dark } from '$lib/styles';
import type { LoaderProps } from '../Loader/Loader.styles';
import type {
	SvelteUIColor,
	SvelteUINumberSize,
	SvelteUIGradient,
	DefaultProps
} from '$lib/styles';

export interface ActionIconProps extends DefaultProps {
	root: keyof HTMLElementTagNameMap;
	color: SvelteUIColor;
	variant: ActionIconVariant;
	size: SvelteUINumberSize;
	radius: SvelteUINumberSize | number;
	loaderProps: LoaderProps;
	loading: boolean;
	disabled: boolean;
	href: string;
	external: boolean;
}

export interface CloseButtonProps extends ActionIconProps {
	iconSize: SvelteUINumberSize;
}

export type ActionIconVariant =
	| 'hover'
	| 'filled'
	| 'outline'
	| 'light'
	| 'default'
	| 'transparent';

export interface ActionIconStylesParams {
	color: SvelteUIColor;
	size: SvelteUINumberSize;
	radius: SvelteUINumberSize;
}

export const sizes = {
	xs: 18,
	sm: 22,
	md: 28,
	lg: 34,
	xl: 44
};

export function getVariantStyles(color: SvelteUIColor, variant: ActionIconVariant) {
	const ctx: SvelteUIGradient = { from: 'indigo', to: 'cyan', deg: 45 };
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
