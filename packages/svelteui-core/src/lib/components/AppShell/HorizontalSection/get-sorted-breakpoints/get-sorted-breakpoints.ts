/* eslint-disable @typescript-eslint/ban-ts-comment */
import { fns } from '$lib/styles';
import type { SvelteUISize } from '$lib/styles';

type Breakpoints<T> = Partial<Record<SvelteUISize | (string & Record<never, never>), T>>;

export interface AppShellTheme {
	spacing: Record<SvelteUISize, number>;
	breakpoints: Record<SvelteUISize, number>;
}

export const theme: AppShellTheme = {
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

export function getSortedBreakpoints<T>(
	breakpoints: Breakpoints<T>,
	theme: AppShellTheme
): [number, T][] {
	if (!breakpoints) {
		return [];
	}

	const values = Object.keys(breakpoints)
		.filter((breakpoint) => breakpoint !== 'base')
		.map((breakpoint) => [
			fns.size({ size: breakpoint, sizes: theme.breakpoints }),
			breakpoints[breakpoint]
		]);

	// @ts-ignore
	values.sort((a, b) => a[0] - b[0]);
	return values as [number, T][];
}
