import { useSvelteUITheme, useSvelteUIThemeContext } from '../../../';
import { rgba } from '../rgba/rgba';
import { themeColor } from '../theme-color/theme-color';
import type { SvelteUIColor, SvelteUIGradient } from '../../../types';

export interface VariantInput {
	variant: 'filled' | 'light' | 'outline' | 'default' | 'gradient' | 'white' | 'subtle';
	color?: SvelteUIColor;
	gradient?: SvelteUIGradient;
}

export interface VariantOutput {
	// Tuples of strings where the first value is the dark version
	// And the second value is the light version.
	border: [string, string] | string;
	background: [string, string] | string;
	color: [string, string] | string;
	hover: [string, string] | string;
}

const DEFAULT_GRADIENT = {
	from: 'indigo',
	to: 'cyan',
	deg: 45
};

/**
 * THe Variant function is a function that takes a variant, optional color/gradient and returns the desired styles for four specific properties.
 *
 * Some styles will return tuples of strings where the first value is the dark version of the specific style, and the second value is the light version.
 *
 * @param VariantInput - an object that has a variant, color, and optional gradient property
 * @returns an object with border, background, color, and hover property styles based on the variant
 */
export function variant({ variant, color, gradient }: VariantInput): VariantOutput {
	const theme = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
	const primaryShade = 6;

	if (variant === 'light') {
		return {
			border: 'transparent',
			background: [rgba(themeColor(color, 8), 0.35), rgba(themeColor(color, 0), 1)],
			color: [
				color === 'dark' ? themeColor('dark', 0) : themeColor(color, 2),
				color === 'dark' ? themeColor('dark', 9) : themeColor(color, primaryShade)
			],
			// themeColor(color, theme.colorScheme === 'dark' ? 2 : getPrimaryShade('light')),
			hover: [rgba(themeColor(color, 7), 0.45), rgba(themeColor(color, 1), 0.65)]
		};
	}

	if (variant === 'default') {
		return {
			border: [themeColor('dark', 5), themeColor('gray', 4)],
			background: [themeColor('dark', 5), theme.colors.white.value],
			color: [theme.colors.white.value, theme.colors.black.value],
			hover: [themeColor('dark', 4), themeColor('gray', 0)]
		};
	}

	if (variant === 'white') {
		return {
			border: 'transparent',
			background: theme.colors.white.value,
			color: themeColor(color, primaryShade),
			hover: null
		};
	}

	if (variant === 'outline') {
		return {
			border: [themeColor(color, 4), themeColor(color, primaryShade)],
			background: 'transparent',
			color: [themeColor(color, 4), themeColor(color, primaryShade)],
			hover: [rgba(themeColor(color, 4), 0.05), rgba(themeColor(color, 0), 0.35)]
		};
	}

	if (variant === 'gradient') {
		const merged = {
			from: gradient?.from || DEFAULT_GRADIENT.from,
			to: gradient?.to || DEFAULT_GRADIENT.to,
			deg: gradient?.deg || DEFAULT_GRADIENT.deg
		};

		return {
			background: `linear-gradient(${merged.deg}deg, ${themeColor(
				merged.from,
				primaryShade
			)} 0%, ${themeColor(merged.to, primaryShade)} 100%)`,
			color: theme.colors.white.value,
			border: 'transparent',
			hover: null
		};
	}

	if (variant === 'subtle') {
		return {
			border: 'transparent',
			background: 'transparent',
			color: [
				color === 'dark' ? themeColor('dark', 0) : themeColor(color, 2),
				color === 'dark' ? themeColor('dark', 9) : themeColor(color, primaryShade)
			],
			hover: [rgba(themeColor(color, 8), 0.35), rgba(themeColor(color, 0), 1)]
		};
	}

	return {
		border: 'transparent',
		background: [themeColor(color, 8), themeColor(color, primaryShade)],
		color: theme.colors.white.value,
		hover: themeColor(color, 7)
	};
}
