import type { SvelteUITheme, SvelteUIThemeOverride } from '../../types';

export function mergeTheme(
	currentTheme: SvelteUITheme,
	themeOverride?: SvelteUIThemeOverride
): SvelteUITheme {
	if (!themeOverride) {
		return currentTheme;
	}

	return Object.keys(currentTheme).reduce((acc, key) => {
		acc[key] =
			typeof themeOverride[key] === 'object'
				? { ...currentTheme[key], ...themeOverride[key] }
				: typeof themeOverride[key] === 'number'
					? themeOverride[key]
					: themeOverride[key] || currentTheme[key];
		return acc;
	}, {} as SvelteUITheme);
}
