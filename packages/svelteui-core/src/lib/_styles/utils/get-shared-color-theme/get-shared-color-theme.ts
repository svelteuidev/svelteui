import type { SvelteuiThemeBase, SvelteuiColor } from '../../types';
import { fns } from '../../functions/index';

interface GetSharedColorScheme {
	color?: SvelteuiColor;
	variant: 'outline' | 'filled' | 'light' | 'gradient' | 'white' | 'default' | 'subtle';
	gradient?: { from: SvelteuiColor; to: SvelteuiColor; deg: number };
	theme: SvelteuiThemeBase;
}

export interface SvelteuiGradient {
	from: string;
	to: string;
	deg?: number;
}

const DEFAULT_GRADIENT: SvelteuiGradient = {
	from: 'indigo',
	to: 'cyan',
	deg: 45
};

/**
 * Provides shared theme styles for components that use theme.colors property on the store:
 * Button, ActionIcon, Badge, ThemeIcon, etc.
 */
export function getSharedColorScheme({ color, theme, variant, gradient }: GetSharedColorScheme) {
	if (variant === 'light') {
		return {
			border: 'transparent',
			background: fns.rgba(
				theme.colorScheme === 'dark' ? theme.colors[color][8] : theme.colors[color][0],
				theme.colorScheme === 'dark' ? 0.35 : 1
			),
			color:
				color === 'dark'
					? theme.colorScheme === 'dark'
						? theme.colors.dark[0]
						: theme.colors.dark[9]
					: theme.colors[color][theme.colorScheme === 'dark' ? 2 : 6],
			hover: fns.rgba(
				theme.colors[color][theme.colorScheme === 'dark' ? 7 : 1],
				theme.colorScheme === 'dark' ? 0.45 : 0.65
			)
		};
	}

	if (variant === 'default') {
		return {
			border: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
			background: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
			hover: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0]
		};
	}

	if (variant === 'white') {
		return {
			border: 'transparent',
			background: theme.white,
			color: theme.colors[color][7],
			hover: null
		};
	}

	if (variant === 'outline') {
		return {
			border: fns.rgba(theme.colors[color][theme.colorScheme === 'dark' ? 4 : 7], 0.75),
			background: 'transparent',
			color: theme.colors[color][theme.colorScheme === 'dark' ? 4 : 7],
			hover:
				theme.colorScheme === 'dark'
					? fns.rgba(theme.colors[color][4], 0.05)
					: fns.rgba(theme.colors[color][0], 0.35)
		};
	}

	if (variant === 'gradient') {
		const merged = {
			from: gradient?.from || DEFAULT_GRADIENT.from,
			to: gradient?.to || DEFAULT_GRADIENT.to,
			deg: gradient?.deg || DEFAULT_GRADIENT.deg
		};

		return {
			background: `linear-gradient(${merged.deg}deg, ${theme.colors[merged.from][6]} 0%, ${
				theme.colors[merged.to][6]
			} 100%)`,
			color: theme.white,
			border: 'transparent',
			hover: null
		};
	}

	if (variant === 'subtle') {
		return {
			border: 'transparent',
			background: 'transparent',
			color:
				color === 'dark'
					? theme.colorScheme === 'dark'
						? theme.colors.dark[0]
						: theme.colors.dark[9]
					: theme.colors[color][theme.colorScheme === 'dark' ? 2 : 6],
			hover: fns.rgba(
				theme.colors[color][theme.colorScheme === 'dark' ? 8 : 0],
				theme.colorScheme === 'dark' ? 0.35 : 1
			)
		};
	}

	// Filled variant as default
	return {
		border: 'transparent',
		background: theme.colors[color][theme.colorScheme === 'dark' ? 8 : 6],
		color: theme.white,
		hover: theme.colors[color][7]
	};
}
