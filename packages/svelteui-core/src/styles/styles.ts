import { getTheme } from './theme.js';
import { darken, isHexColor, rgba } from './utils.js';

const baseColorNames = [
	'dark',
	'gray',
	'red',
	'pink',
	'grape',
	'violet',
	'indigo',
	'blue',
	'cyan',
	'teal',
	'green',
	'lime',
	'yellow',
	'orange'
];

const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

function getColor(color: string): {
	color: string;
	shade: number | undefined;
	value: string;
	fromTheme: boolean;
} {
	if (isHexColor(color)) {
		return {
			color,
			shade: undefined,
			value: color,
			fromTheme: false
		};
	}

	if (color === 'white' || color === 'black') {
		return {
			color,
			shade: undefined,
			value: `var(--${color})`,
			fromTheme: false
		};
	}

	const [_color, shade] = color.split('.');
	if (shade === undefined || !shades.includes(shade)) {
		return {
			color,
			shade: undefined,
			value: color,
			fromTheme: baseColorNames.includes(_color)
		};
	}

	return {
		color: _color,
		shade: Number(shade),
		value: `var(--${_color}${shade})`,
		fromTheme: baseColorNames.includes(_color) && shades.includes(shade)
	};
}

export function toGradient(
	gradient: { to: string; from: string; deg?: number } | undefined
): string {
	const values = {
		from: getColor(gradient?.from || 'indigo').value,
		to: getColor(gradient?.to || 'cyan').value,
		deg: gradient?.deg || 0
	};

	// @TODO: better defaults (from theme?)

	return `linear-gradient(${values.deg}deg, ${values.from} 0%, ${values.to} 100%)`;
}

export function mapSizeVariable(size: number | string, prefix?: string): string {
	if (typeof size === 'number') {
		return `${size}px`; // @TODO: convert to rem later
	}

	return `var(--${prefix}-${size})`;
}

export function variantVariables(
	variant: string,
	color?: string,
	gradient?: { to: string; from: string; deg?: number }
) {
	const theme = getTheme();
	color = color ?? theme.primary;
	const colorInfo = getColor(color);

	switch (variant) {
		case 'light':
			if (!colorInfo.fromTheme) {
				return [
					`--variant-background: ${rgba(color, 0.1)}`,
					`--variant-color: ${color}`,
					`--variant-border: 1px solid transparent`, // @TODO: change '1px' to rem in the future
					`--variant-hover: ${rgba(color, 0.12)}`
				];
			}

			if (colorInfo.shade !== undefined) {
				const themeColor = theme.colors[colorInfo.color][colorInfo.shade / 100];
				return [
					`--variant-background: ${rgba(themeColor, 0.1)}`,
					`--variant-color: var(--${colorInfo.color}${Math.min(colorInfo.shade, 600)})`,
					`--variant-border: 1px solid transparent`,
					`--variant-hover: ${rgba(themeColor, 0.12)}`
				];
			}

			return [
				`--variant-background: var(--${color}-light)`,
				`--variant-color: var(--${color}-light-color)`,
				`--variant-border: 1px solid transparent`,
				`--variant-hover: var(--${color}-light-hover)`
			];
		case 'filled':
			if (!colorInfo.fromTheme) {
				return [
					`--variant-background: ${color}`,
					`--variant-color: var(--white)`,
					`--variant-border: 1px solid transparent`,
					`--variant-hover: ${darken(color, 0.1)}`
				];
			}

			if (colorInfo.shade !== undefined) {
				return [
					`--variant-background: var(--${colorInfo.color}${colorInfo.shade})`,
					`--variant-color: var(--white)`,
					`--variant-border: 1px solid transparent`,
					`--variant-hover: var(--${colorInfo.color}${
						colorInfo.shade === 900 ? 800 : colorInfo.shade + 100
					})`
				];
			}

			return [
				`--variant-background: var(--${color}-filled)`,
				`--variant-color: var(--white)`,
				`--variant-border: 1px solid transparent`,
				`--variant-hover: var(--${color}-filled-hover)`
			];
		case 'outline':
			if (!colorInfo.fromTheme) {
				return [
					`--variant-background: transparent`,
					`--variant-color: ${color}`,
					`--variant-border: 1px solid ${color}`,
					`--variant-hover: ${rgba(color, 0.05)}`
				];
			}

			if (colorInfo.shade !== undefined) {
				return [
					`--variant-background: transparent`,
					`--variant-color: var(--${colorInfo.color}${colorInfo.shade})`,
					`--variant-border: 1px solid var(--${colorInfo.color}${colorInfo.shade})`,
					`--variant-hover: ${rgba(theme.colors[colorInfo.color][colorInfo.shade / 100], 0.05)}`
				];
			}

			return [
				`--variant-background: transparent`,
				`--variant-color: var(--${color}-outline)`,
				`--variant-border: 1px solid var(--${color}-outline)`,
				`--variant-hover: var(--${color}-outline-hover)`
			];
		case 'subtle':
			if (!colorInfo.fromTheme) {
				return [
					`--variant-background: transparent`,
					`--variant-color: ${color}`,
					`--variant-border: 1px solid transparent`,
					`--variant-hover: ${rgba(color, 0.12)}`
				];
			}

			if (colorInfo.shade !== undefined) {
				return [
					`--variant-background: transparent`,
					`--variant-color: var(--${colorInfo.color}${Math.min(colorInfo.shade, 600)})`,
					`--variant-border: 1px solid transparent`,
					`--variant-hover: ${rgba(theme.colors[colorInfo.color][colorInfo.shade / 100], 0.12)}`
				];
			}

			return [
				`--variant-background: transparent`,
				`--variant-color: var(--${color}-light-color)`,
				`--variant-border: 1px solid transparent`,
				`--variant-hover: var(--${color}-light-hover)`
			];
		case 'transparent':
			if (!colorInfo.fromTheme) {
				return [
					`--variant-background: transparent`,
					`--variant-color: ${color}`,
					`--variant-border: 1px solid transparent`,
					`--variant-hover: transparent`
				];
			}

			if (colorInfo.shade !== undefined) {
				return [
					`--variant-background: transparent`,
					`--variant-color: var(--${colorInfo.color}${Math.min(colorInfo.shade, 600)})`,
					`--variant-border: 1px solid transparent`,
					`--variant-hover: transparent`
				];
			}

			return [
				`--variant-background: transparent`,
				`--variant-color: var(--${color}-light-color)`,
				`--variant-border: 1px solid transparent`,
				`--variant-hover: transparent`
			];
		case 'white':
			if (!colorInfo.fromTheme) {
				return [
					`--variant-background: var(--white)`,
					`--variant-color: ${color}`,
					`--variant-border: 1px solid transparent`,
					`--variant-hover: ${darken(theme.white, 0.01)}`
				];
			}

			if (colorInfo.shade !== undefined) {
				return [
					`--variant-background: var(--white)`,
					`--variant-color: var(--${colorInfo.color}${colorInfo.shade})`,
					`--variant-border: 1px solid transparent`,
					`--variant-hover: ${darken(theme.white, 0.01)}`
				];
			}

			return [
				`--variant-background: var(--white)`,
				`--variant-color: var(--${color}-filled)`,
				`--variant-border: 1px solid transparent`,
				`--variant-hover: ${darken(theme.white, 0.01)}`
			];
		case 'default':
			return [
				`--variant-background: var(--default)`,
				`--variant-color: var(--default-color)`,
				`--variant-border: 1px solid var(--default-border)`,
				`--variant-hover: var(--default-hover)`
			];
		case 'gradient':
			return [
				`--variant-background: ${toGradient(gradient)}`,
				`--variant-color: var(--white)`,
				`--variant-border: none`,
				`--variant-hover: ${toGradient(gradient)}`
			];
		default:
			return [];
	}
}
