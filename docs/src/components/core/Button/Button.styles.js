import { fns } from '../_styles';
const DEFAULT_GRADIENT = {
	from: 'indigo',
	to: 'cyan',
	deg: 45
};
export const sizes = {
	xs: {
		height: 30,
		padding: '0px 14px'
	},
	sm: {
		height: 36,
		padding: '0px 18px'
	},
	md: {
		height: 42,
		padding: '0px 22px'
	},
	lg: {
		height: 50,
		padding: '0px 26px'
	},
	xl: {
		height: 60,
		padding: '0px 32px'
	},
	'compact-xs': {
		height: 22,
		padding: '0 7px'
	},
	'compact-sm': {
		height: 26,
		padding: '0 8px'
	},
	'compact-md': {
		height: 30,
		padding: '0 10px'
	},
	'compact-lg': {
		height: 34,
		padding: '0 12px'
	},
	'compact-xl': {
		height: 40,
		padding: '0 14px'
	}
};
export function getSharedColorScheme({ color, theme, variant, gradient }) {
	if (variant === 'light') {
		return {
			border: 'transparent',
			background: fns.rgba(theme.colors[color][0], 1),
			color: theme.colors[color][6],
			hover: fns.rgba(theme.colors[color][1], 0.65)
		};
	}
	if (variant === 'default') {
		return {
			border: theme.colors.gray[4],
			background: theme.white,
			color: theme.black,
			hover: theme.colors.gray[0]
		};
	}
	if (variant === 'white') {
		return {
			border: 'transparent',
			background: theme.white,
			color: theme.colors[color][6],
			hover: theme.white
		};
	}
	if (variant === 'outline') {
		return {
			border: fns.rgba(theme.colors[color][7], 0.75),
			background: 'transparent',
			color: theme.colors[color][6],
			hover: fns.rgba(theme.colors[color][0], 0.35)
		};
	}
	if (variant === 'subtle') {
		return {
			border: 'transparent',
			background: 'transparent',
			color: theme.colors[color][6],
			hover: fns.rgba(theme.colors[color][0])
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
	// Filled variant as default
	return {
		border: 'transparent',
		background: theme.colors[color][6],
		color: theme.white,
		hover: theme.colors[color][7]
	};
}
