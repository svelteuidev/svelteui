<script lang="ts">
	import { theme, dark, fns } from '$lib/styles';
	import { Box } from '../Box';
	import { headings } from './TypographyProvider.styles';
	import type { CSS, SvelteUIColor } from '$lib/styles';
	import type { TypographyProviderProps as $$TypographyProviderProps } from './TypographyProvider.styles';

	/** Used for forwarding actions from component */
	export let use: $$TypographyProviderProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$TypographyProviderProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$TypographyProviderProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$TypographyProviderProps['override'] = {};

	let primaryColor: SvelteUIColor = 'blue';

	const { themeColor } = fns;

	let TypographyProviderStyles: CSS;

	$: TypographyProviderStyles = {
		[`${dark.selector} &`]: {
			color: themeColor('dark', 0),
			'& hr': {
				borderTop: `1px dashed ${themeColor('gray', 4)}`
			},

			'& a': {
				color: themeColor(primaryColor, 4)
			},
			'& pre': {
				backgroundColor: themeColor('dark', 8)
			},
			'& code': {
				color: themeColor('dark', 0),
				backgroundColor: themeColor('dark', 5),
				border: `1px solid ${themeColor('dark', 3)}`
			},
			'& caption': {
				color: themeColor('gray', 6)
			},
			'& th': {
				color: themeColor('dark', 0)
			},
			'& thead th': {
				borderBottom: `1px solid ${themeColor('dark', 4)}`
			},

			'& tfoot th': {
				borderTop: `1px solid ${themeColor('dark', 4)}`
			},

			'& td': {
				padding: '7px 10px',
				borderBottom: `1px solid ${themeColor('dark', 4)}`,
				fontSize: 14
			},
			'& blockquote': {
				color: themeColor('dark', 0),

				'& cite': {
					color: themeColor('dark', 2)
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
			borderTop: `1px dashed ${themeColor('gray', 4)}`
		},

		'& a': {
			focusRing: 'auto',
			color: themeColor(primaryColor, 6),
			textDecoration: 'none',

			'&:hover': {
				textDecoration: 'underline'
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
			backgroundColor: themeColor('gray', 0)
		},

		'& code': {
			lineHeight: theme.lineHeights.md.value,
			padding: `0px ${+theme.space.xs.value / 2}px`,
			borderRadius: theme.radii.sm.value,
			color: 'black',
			backgroundColor: themeColor('dark', 0),
			fontFamily: theme.fonts.mono.value,
			border: `1px solid ${themeColor('gray', 3)}`,
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
				color: themeColor('dark', 2)
			},

			'& th': {
				textAlign: 'left',
				fontWeight: 'bold',
				color: themeColor('gray', 7),
				fontSize: 14,
				padding: '7px 10px'
			},

			'& thead th': {
				borderBottom: `1px solid ${themeColor('gray', 3)}`
			},

			'& tfoot th': {
				borderTop: `1px solid ${themeColor('gray', 3)}`
			},

			'& td': {
				padding: '7px 10px',
				borderBottom: `1px solid ${themeColor('gray', 3)}`,
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
				color: themeColor('gray', 6),
				overflow: 'hidden',
				textOverflow: 'ellipsis'
			}
		}
	};
</script>

<Box
	bind:element
	css={{ ...TypographyProviderStyles, ...override }}
	class={className}
	{use}
	{...$$restProps}
>
	<slot />
</Box>
