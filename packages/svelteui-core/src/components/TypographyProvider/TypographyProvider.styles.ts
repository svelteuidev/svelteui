import { createStyles } from '$lib/styles';
import type { SvelteUIColor } from '$lib/styles';

export interface TypographyProviderStyleParams {
	primaryColor: SvelteUIColor;
	underline: boolean;
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

export default createStyles((theme, { primaryColor, underline }: TypographyProviderStyleParams) => {
	return {
		root: {
			[`${theme.dark} &`]: {
				color: theme.fn.themeColor('dark', 0),
				'& hr': {
					borderTop: `1px dashed ${theme.fn.themeColor('gray', 4)}`
				},

				'& a': {
					color: theme.fn.themeColor(primaryColor, 4)
				},
				'& pre': {
					backgroundColor: theme.fn.themeColor('dark', 8)
				},
				'& code': {
					color: theme.fn.themeColor('dark', 0),
					backgroundColor: theme.fn.themeColor('dark', 5),
					border: `1px solid ${theme.fn.themeColor('dark', 3)}`
				},
				'& caption': {
					color: theme.fn.themeColor('gray', 6)
				},
				'& th': {
					color: theme.fn.themeColor('dark', 0)
				},
				'& thead th': {
					borderBottom: `1px solid ${theme.fn.themeColor('dark', 4)}`
				},

				'& tfoot th': {
					borderTop: `1px solid ${theme.fn.themeColor('dark', 4)}`
				},

				'& td': {
					padding: '7px 10px',
					borderBottom: `1px solid ${theme.fn.themeColor('dark', 4)}`,
					fontSize: 14
				},
				'& blockquote': {
					color: theme.fn.themeColor('dark', 0),

					'& cite': {
						color: theme.fn.themeColor('dark', 2)
					}
				}
			},
			fontFamily: theme.fonts.standard.value ?? 'sans-serif',
			color: 'black',
			lineHeight: theme.lineHeights.md.value,
			fontSize: theme.fontSizes.md.value,

			'@media (max-width: 755px)': {
				fontSize: theme.fontSizes.sm.value
			},

			...headings,

			'& img': {
				maxWidth: '100%',
				marginBottom: +theme.space.xs.value
			},

			'& p': {
				marginTop: 0,
				marginBottom: +theme.space.lg.value
			},

			'& hr': {
				marginTop: +theme.space.md.value,
				marginBottom: +theme.space.sm.value,
				borderBottom: 0,
				borderLeft: 0,
				borderRight: 0,
				borderTop: `1px dashed ${theme.fn.themeColor('gray', 4)}`
			},

			'& a': {
				focusRing: 'auto',
				color: theme.fn.themeColor(primaryColor, 6),
				textDecoration: 'none',

				'&:hover': {
					textDecoration: underline ? 'underline' : 'none'
				}
			},

			'& pre': {
				padding: +theme.space.xs.value,
				lineHeight: theme.lineHeights.md.value,
				margin: 0,
				marginTop: +theme.space.md.value,
				marginBottom: +theme.space.md.value,
				overflowX: 'auto',
				fontFamily: theme.fonts.mono.value,
				fontSize: theme.fontSizes.sm,
				borderRadius: theme.radii.sm.value,
				backgroundColor: theme.fn.themeColor('gray', 0)
			},

			'& code': {
				lineHeight: theme.lineHeights.md.value,
				padding: `0px ${+theme.space.xs.value / 2}px`,
				borderRadius: theme.radii.sm.value,
				color: 'black',
				backgroundColor: theme.fn.themeColor('dark', 0),
				fontFamily: theme.fonts.mono.value,
				border: `1px solid ${theme.fn.themeColor('gray', 3)}`,
				whiteSpace: 'nowrap',
				fontSize: '.9rem',
				background: '#f4f5f7'
			},

			'& ul, & ol': {
				marginBottom: +theme.space.md.value,
				paddingLeft: +theme.space.lg.value * 2,

				'& li': {
					marginTop: +theme.space.xs.value
				}
			},

			'& table': {
				width: '100%',
				borderCollapse: 'collapse',
				captionSide: 'bottom',
				marginBottom: +theme.space.md.value,

				'& caption': {
					marginTop: +theme.space.xs.value,
					fontSize: theme.fontSizes.sm,
					color: theme.fn.themeColor('dark', 2)
				},

				'& th': {
					textAlign: 'left',
					fontWeight: 'bold',
					color: theme.fn.themeColor('gray', 7),
					fontSize: 14,
					padding: '7px 10px'
				},

				'& thead th': {
					borderBottom: `1px solid ${theme.fn.themeColor('gray', 3)}`
				},

				'& tfoot th': {
					borderTop: `1px solid ${theme.fn.themeColor('gray', 3)}`
				},

				'& td': {
					padding: '7px 10px',
					borderBottom: `1px solid ${theme.fn.themeColor('gray', 3)}`,
					fontSize: 14
				},

				'& tr:last-of-type td': {
					borderBottom: 'none'
				}
			},

			'& blockquote': {
				fontSize: theme.fontSizes.lg.value,
				lineHeight: theme.lineHeights.md.value,
				margin: `${theme.space.md.value}px 0`,
				borderTopRightRadius: theme.radii.sm.value,
				borderBottomRightRadius: theme.radii.sm.value,
				padding: `${theme.space.md.value}px ${theme.space.lg.value}px`,
				color: 'black',

				'& cite': {
					display: 'block',
					fontSize: theme.fontSizes.sm,
					marginTop: +theme.space.xs.value,
					color: theme.fn.themeColor('gray', 6),
					overflow: 'hidden',
					textOverflow: 'ellipsis'
				}
			}
		}
	};
});
