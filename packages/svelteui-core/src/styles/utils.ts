/**
 * Taken from https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
 *
 * @param color The string possibly containing a color
 * @returns If the given string is an hexadecimal color value
 */
export function isHexColor(color: string): boolean {
	return /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i.test(color);
}

interface RGBA {
	r: number;
	g: number;
	b: number;
	a: number;
}

function hexToRgba(color: string): RGBA {
	const replaced = color.replace('#', '');

	const parsed = parseInt(replaced, 16);
	const r = (parsed >> 16) & 255;
	const g = (parsed >> 8) & 255;
	const b = parsed & 255;

	return {
		r,
		g,
		b,
		a: 1
	};
}

function rgbStringToRgba(color: string): RGBA {
	const [r, g, b, a] = color
		.replace(/[^0-9,.]/g, '')
		.split(',')
		.map(Number);

	return { r, g, b, a: a || 1 };
}

export function toRgba(color: string): RGBA {
	if (isHexColor(color)) {
		return hexToRgba(color);
	}

	if (color.startsWith('rgb')) {
		return rgbStringToRgba(color);
	}

	return {
		r: 0,
		g: 0,
		b: 0,
		a: 1
	};
}

export function rgba(color: string, alpha: number = 1) {
	if (typeof color !== 'string' || alpha > 1 || alpha < 0) {
		return 'rgba(0, 0, 0, 1)';
	}

	const { r, g, b } = toRgba(color);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function darken(color: string, alpha: number) {
	if (color.startsWith('var(')) {
		return color;
	}

	const { r, g, b, a } = toRgba(color);
	const f = 1 - alpha;

	const dark = (input: number) => Math.round(input * f);

	return `rgba(${dark(r)}, ${dark(g)}, ${dark(b)}, ${a})`;
}
