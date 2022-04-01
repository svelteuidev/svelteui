import type { SvelteuiThemeBase } from '../../../types';

export function themeColor(theme: SvelteuiThemeBase) {
	return (color: string, shade: number, primaryFallback = true): string => {
		const primaryShades = theme.colors[theme.primaryColor];
		return color in theme.colors
			? theme.colors[color][shade]
			: primaryFallback
			? primaryShades[shade]
			: color;
	};
}
