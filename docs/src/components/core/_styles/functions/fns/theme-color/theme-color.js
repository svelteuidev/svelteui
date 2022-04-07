export function themeColor(theme) {
	return (color, shade, primaryFallback = true) => {
		const primaryShades = theme.colors[theme.primaryColor];
		return color in theme.colors
			? theme.colors[color][shade]
			: primaryFallback
			? primaryShades[shade]
			: color;
	};
}
