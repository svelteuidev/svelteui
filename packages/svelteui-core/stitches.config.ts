import { createStitches } from '@stitches/core';
import { colors } from '$lib/_styles/default-colors';

export const { css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches(
	{
		prefix: 'svelteui',
		theme: {
			colors,
			space: {
				xs: 10,
				sm: 12,
				md: 16,
				lg: 20,
				xl: 24
			},
			fontSizes: {
				xs: '12px',
				sm: '14px',
				md: '16px',
				lg: '18px',
				xl: '20px'
			},
			fonts: {
				standard:
					'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
				mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
				fallback: 'Segoe UI, system-ui, sans-serif'
			},
			fontWeights: {
				Thin: 100,
				ExtraLight: 200,
				Light: 300,
				Normal: 400,
				Medium: 500,
				SemiBold: 600,
				Bold: 700,
				ExtraBold: 800
			},
			lineHeights: {},
			letterSpacings: {},
			sizes: {},
			radii: {
				xs: '2px',
				sm: '4px',
				md: '8px',
				lg: '16px',
				xl: '32px'
			},
			shadows: {
				xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
				sm: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
				md: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
				lg: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',
				xl: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px'
			}
		},
		media: {
			sm: '(min-width: 640px)',
			md: '(min-width: 768px)',
			lg: '(min-width: 1024px)',
			xl: '(min-width: 1280px)',
			xxl: '(min-width: 1536px)'
		},
		utils: {
			size: (value) => ({
				width: value,
				height: value
			})
		}
	}
);

/** Function for dark theme */
const dark = createTheme('dark-theme', {
	colors: {
		backgroundStandard: '$dark700',
		primary: '#1971c2',
		dark600: '$dark800',
		gray600: '$gray800',
		red600: '$red800',
		pink600: '$pink800',
		grape600: '$grape800',
		violet600: '$violet800',
		indigo600: '$indigo800',
		blue600: '$blue800',
		cyan600: '$cyan800',
		teal600: '$teal800',
		green600: '$green800',
		lime600: '$lime800',
		yellow600: '$yellow800',
		orange600: '$orange800',

		/** Variant caveats, will change later */
		// Default variant
		'border-default': '$dark500',
		'background-default': '$dark500',
		'color-default': 'White',
		'hover-default': '$dark400',

		// Light variant
		'background-light': '$dark800',
		'color-light': 'White',
		'hover-light': '$dark400',

		// Outline variant
		'border-outline': '$dark500',
		'background-outline': '$dark500',
		'color-outline': 'White',
		'hover-outline': '$dark400',

		// Subtle variant
		'border-subtle': '$dark500',
		'background-subtle': '$dark500',
		'color-subtle': 'White',
		'hover-subtle': '$dark400'
	}
});

/**
 * Normalize css function
 */
const NormalizeCSS = globalCss({
	html: {
		fontFamily: 'sans-serif',
		lineHeight: '1.15',
		textSizeAdjust: '100%'
	},

	body: {
		margin: 0
	},

	'article, aside, footer, header, nav, section, figcaption, figure, main': {
		display: 'block'
	},

	h1: {
		fontSize: '2em',
		margin: 0
	},

	hr: {
		boxSizing: 'content-box',
		height: 0,
		overflow: 'visible'
	},

	pre: {
		fontFamily: 'monospace, monospace',
		fontSize: '1em'
	},

	a: {
		background: 'transparent',
		textDecorationSkip: 'objects'
	},

	'a:active, a:hover': {
		outlineWidth: 0
	},

	'abbr[title]': {
		borderBottom: 'none',
		textDecoration: 'underline'
	},

	'b, strong': {
		fontWeight: 'bolder'
	},

	'code, kbp, samp': {
		fontFamily: 'monospace, monospace',
		fontSize: '1em'
	},

	dfn: {
		fontStyle: 'italic'
	},

	mark: {
		backgroundColor: '#ff0',
		color: '#000'
	},

	small: {
		fontSize: '80%'
	},

	'sub, sup': {
		fontSize: '75%',
		lineHeight: 0,
		position: 'relative',
		verticalAlign: 'baseline'
	},

	sup: {
		top: '-0.5em'
	},

	sub: {
		bottom: '-0.25em'
	},

	'audio, video': {
		display: 'inline-block'
	},

	'audio:not([controls])': {
		display: 'none',
		height: 0
	},

	img: {
		borderStyle: 'none',
		verticalAlign: 'middle'
	},

	'svg:not(:root)': {
		overflow: 'hidden'
	},

	'button, input, optgroup, select, textarea': {
		fontFamily: 'sans-serif',
		fontSize: '100%',
		lineHeight: '1.15',
		margin: 0
	},

	'button, input': {
		overflow: 'visible'
	},

	'button, select': {
		textTransform: 'none'
	},

	'button, [type=reset], [type=submit]': {
		WebkitAppearance: 'button'
	},

	'button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner':
		{
			borderStyle: 'none',
			padding: 0
		},

	'button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring':
		{
			outline: '1px dotted ButtonText'
		},

	legend: {
		boxSizing: 'border-box',
		color: 'inherit',
		display: 'table',
		maxWidth: '100%',
		padding: 0,
		whiteSpace: 'normal'
	},

	progress: {
		display: 'inline-block',
		verticalAlign: 'baseline'
	},

	textarea: {
		overflow: 'auto'
	},

	'[type=checkbox], [type=radio]': {
		boxSizing: 'border-box',
		padding: 0
	},

	'[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button': {
		height: 'auto'
	},

	'[type=search]': {
		appearance: 'textfield',
		outlineOffset: '-2px'
	},

	'[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration': {
		appearance: 'none'
	},

	'::-webkit-file-upload-button': {
		appearance: 'button',
		font: 'inherit'
	},

	'details, menu': {
		display: 'block'
	},

	summary: {
		display: 'list-item'
	},

	canvas: {
		display: 'inline-block'
	},

	template: {
		display: 'none'
	},

	'[hidden]': {
		display: 'none'
	}
});
export { NormalizeCSS, dark };
