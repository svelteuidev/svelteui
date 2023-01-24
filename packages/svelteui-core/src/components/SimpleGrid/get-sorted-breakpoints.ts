import type { SimpleGridBreakpoint } from './SimpleGrid';

interface GetSize {
	size: string | number;
	sizes: Record<string, any>;
}

/** Makeshift theme object containing breakpoints for function */
export const theme = {
	spacing: {
		xs: 10,
		sm: 12,
		md: 16,
		lg: 20,
		xl: 24
	},
	breakpoints: {
		xs: 576,
		sm: 768,
		md: 992,
		lg: 1200,
		xl: 1400
	}
};

export function size(props: GetSize) {
	if (typeof props.size === 'number') {
		return props.size;
	}

	return props.sizes[props.size] || props.size || props.sizes.md;
}

export function getSortedBreakpoints(theme, breakpoints: SimpleGridBreakpoint[]) {
	if (breakpoints.length === 0) {
		return breakpoints;
	}

	const property = 'maxWidth' in breakpoints[0] ? 'maxWidth' : 'minWidth';
	const sorted = [...breakpoints].sort(
		(a, b) =>
			size({ size: b[property], sizes: theme.breakpoints }) -
			size({ size: a[property], sizes: theme.breakpoints })
	);

	return property === 'minWidth' ? sorted.reverse() : sorted;
}
