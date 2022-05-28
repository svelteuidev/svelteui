import type { DefaultProps } from '$lib/styles';

export interface TypographyProviderProps extends DefaultProps<HTMLDivElement> {
	temp: never;
}

/** Make-shift theme object for heading styles */
export const headingTheme = {
	spacing: {
		xs: 10,
		sm: 12,
		md: 16,
		lg: 20,
		xl: 24
	},
	headings: {
		fontFamily:
			'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
		fontWeight: 700,
		sizes: {
			h1: { fontSize: 34, lineHeight: 1.3 },
			h2: { fontSize: 26, lineHeight: 1.35 },
			h3: { fontSize: 22, lineHeight: 1.4 },
			h4: { fontSize: 18, lineHeight: 1.45 },
			h5: { fontSize: 16, lineHeight: 1.5 },
			h6: { fontSize: 14, lineHeight: 1.5 }
		}
	}
};

export const headings = Object.keys(headingTheme.headings.sizes).reduce((acc, h) => {
	acc[`& ${h}`] = {
		fontFamily: headingTheme.headings.fontFamily,
		fontWeight: headingTheme.headings.fontWeight,
		marginTop: headingTheme.spacing.xl * headingTheme.headings.sizes[h].lineHeight,
		marginBottom: headingTheme.spacing.sm,
		...headingTheme.headings.sizes[h],

		'@media (max-width: 755px)': {
			fontSize:
				typeof headingTheme.headings.sizes[h].fontSize === 'number' &&
				(headingTheme.headings.sizes[h].fontSize as number) / 1.3
		}
	};

	return acc;
}, {});
