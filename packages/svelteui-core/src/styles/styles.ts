import { getTheme } from './theme.js';
import type { SvelteUIStyleSystemProps } from './types.js';
import { darken, isHexColor, isValidSizeValue, rgba } from './utils.js';

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

const NEGATIVE_VALUES = ['-xs', '-sm', '-md', '-lg', '-xl'];

function getSizeValue(size: any) {
	const theme = getTheme();
	const value = theme.sizes[size.replace('-', '')];

	if (!value) throw Error(`Size ${size} is not a valid value.`);

	if (NEGATIVE_VALUES.includes(size)) {
		return value * -1;
	}
	return value;
}

export function getColor(color: string): {
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

	// @TODO(migration): better defaults (from theme?)

	return `linear-gradient(${values.deg}deg, ${values.from} 0%, ${values.to} 100%)`;
}

export function mapSizeVariable(size: number | string, prefix?: string): string {
	if (typeof size === 'number') {
		return `${size}px`; // @TODO(migration): convert to rem later
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
					`--variant-border: 1px solid transparent`, // @TODO(migration): change '1px' to rem in the future
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

export function systemSizeVariables(systemStyles: SvelteUIStyleSystemProps) {
	const styleVariales = [];

	// @TODO(migration): use this in all components - find a way :)

	// @TODO(migration): perhaps move to rem instead of px
	if (isValidSizeValue(systemStyles.p)) {
		const value = getSizeValue(systemStyles.p);
		styleVariales.push(`--padding: ${value}px`);
	}
	if (isValidSizeValue(systemStyles.py)) {
		const value = getSizeValue(systemStyles.py);
		styleVariales.push(`--paddingVertical: ${value}px`);
	}
	if (isValidSizeValue(systemStyles.px)) {
		const value = getSizeValue(systemStyles.px);
		styleVariales.push(`--paddingHorizontal: ${value}px`);
	}
	if (isValidSizeValue(systemStyles.pt)) {
		const value = getSizeValue(systemStyles.pt);
		styleVariales.push(`--paddingTop: ${value}px`);
	}
	if (isValidSizeValue(systemStyles.pb)) {
		const value = getSizeValue(systemStyles.pb);
		styleVariales.push(`--paddingBottom: ${value}px`);
	}
	if (isValidSizeValue(systemStyles.pl)) {
		const value = getSizeValue(systemStyles.pl);
		styleVariales.push(`--paddingLeft: ${value}px`);
	}
	if (isValidSizeValue(systemStyles.pr)) {
		const value = getSizeValue(systemStyles.pr);
		styleVariales.push(`--paddingRight: ${value}px`);
	}
	if (isValidSizeValue(systemStyles.m)) {
		const value = getSizeValue(systemStyles.m);
		styleVariales.push(`--margin: ${value}px`);
	}
	if (isValidSizeValue(systemStyles.my)) {
		const value = getSizeValue(systemStyles.my);
		styleVariales.push(`--marginVertical: ${value}px`);
	}
	if (isValidSizeValue(systemStyles.mx)) {
		const value = getSizeValue(systemStyles.mx);
		styleVariales.push(`--marginHorizontal: ${value}px`);
	}
	if (isValidSizeValue(systemStyles.mt)) {
		const value = getSizeValue(systemStyles.mt);
		styleVariales.push(`--marginTop: ${value}px`);
	}
	if (isValidSizeValue(systemStyles.mb)) {
		const value = getSizeValue(systemStyles.mb);
		styleVariales.push(`--marginBottom: ${value}px`);
	}
	if (isValidSizeValue(systemStyles.ml)) {
		const value = getSizeValue(systemStyles.ml);
		styleVariales.push(`--marginLeft: ${value}px`);
	}
	if (isValidSizeValue(systemStyles.mr)) {
		const value = getSizeValue(systemStyles.mr);
		styleVariales.push(`--marginRight: ${value}px`);
	}

	// TODO(migration): add other system styles
	return [
		`padding-right: var(var(--paddingRight, --paddingHorizontal), --padding)`,
		`padding-left: var(var(--paddingLeft, --paddingHorizontal), --padding)`,
		`padding-top: var(var(--paddingTop, --paddingVertical), --padding)`,
		`padding-bottom: var(var(--paddingBottom, --paddingVertical), --padding)`,
		`margin-right: var(var(--marginRight, --marginHorizontal), --margin)`,
		`margin-left: var(var(--marginLeft, --marginHorizontal), --margin)`,
		`margin-top: var(var(--marginTop, --marginVertical), --margin)`,
		`margin-bottom: var(var(--marginBottom, --marginVertical), --margin)`
	];
}
