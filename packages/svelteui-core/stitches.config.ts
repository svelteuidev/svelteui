import { createStitches } from '@stitches/core';
import { colors } from '$lib/_styles/index';
import type { CSS } from '@stitches/core/types/css-util';

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
			size: (value: number | string): CSS => ({
				width: value,
				height: value
			}),
			focusRing: (value: 'auto' | 'always' | 'never'): CSS => ({
				WebkitTapHighlightColor: 'transparent',

				'&:focus': {
					outlineOffset: 2,
					outline: value === 'always' || value === 'auto' ? '2px solid $primary' : 'none'
				},

				'&:focus:not(:focus-visible)': {
					outline: value === 'auto' || value === 'never' ? 'none' : undefined
				}
			})
		}
	}
);

/** Function for dark theme */
const dark = createTheme('dark-theme', {
	colors: {
		backgroundStandard: '$dark700',
		primary: '#228be6',
		dark50: '#C1C2C5',
		dark100: '#A6A7AB',
		dark200: '#909296',
		dark300: '#5c5f66',
		dark400: '#373A40',
		dark500: '#2C2E33',
		dark600: '#25262b',
		dark700: '#1A1B1E',
		dark800: '#141517',
		dark900: '#101113',
		gray50: '#f8f9fa',
		gray100: '#f1f3f5',
		gray200: '#e9ecef',
		gray300: '#dee2e6',
		gray400: '#ced4da',
		gray500: '#adb5bd',
		gray600: '#868e96',
		gray700: '#495057',
		gray800: '#343a40',
		gray900: '#212529',
		red50: '#fff5f5',
		red100: '#ffe3e3',
		red200: '#ffc9c9',
		red300: '#ffa8a8',
		red400: '#ff8787',
		red500: '#ff6b6b',
		red600: '#fa5252',
		red700: '#f03e3e',
		red800: '#e03131',
		red900: '#c92a2a',
		pink50: '#fff0f6',
		pink100: '#ffdeeb',
		pink200: '#fcc2d7',
		pink300: '#faa2c1',
		pink400: '#f783ac',
		pink500: '#f06595',
		pink600: '#e64980',
		pink700: '#d6336c',
		pink800: '#c2255c',
		pink900: '#a61e4d',
		grape50: '#f8f0fc',
		grape100: '#f3d9fa',
		grape200: '#eebefa',
		grape300: '#e599f7',
		grape400: '#da77f2',
		grape500: '#cc5de8',
		grape600: '#be4bdb',
		grape700: '#ae3ec9',
		grape800: '#9c36b5',
		grape900: '#862e9c',
		violet50: '#f3f0ff',
		violet100: '#e5dbff',
		violet200: '#d0bfff',
		violet300: '#b197fc',
		violet400: '#9775fa',
		violet500: '#845ef7',
		violet600: '#7950f2',
		violet700: '#7048e8',
		violet800: '#6741d9',
		violet900: '#5f3dc4',
		indigo50: '#edf2ff',
		indigo100: '#dbe4ff',
		indigo200: '#bac8ff',
		indigo300: '#91a7ff',
		indigo400: '#748ffc',
		indigo500: '#5c7cfa',
		indigo600: '#4c6ef5',
		indigo700: '#4263eb',
		indigo800: '#3b5bdb',
		indigo900: '#364fc7',
		blue50: '#e7f5ff',
		blue100: '#d0ebff',
		blue200: '#a5d8ff',
		blue300: '#74c0fc',
		blue400: '#4dabf7',
		blue500: '#339af0',
		blue600: '#228be6',
		blue700: '#1c7ed6',
		blue800: '#1971c2',
		blue900: '#1864ab',
		cyan50: '#e3fafc',
		cyan100: '#c5f6fa',
		cyan200: '#99e9f2',
		cyan300: '#66d9e8',
		cyan400: '#3bc9db',
		cyan500: '#22b8cf',
		cyan600: '#15aabf',
		cyan700: '#1098ad',
		cyan800: '#0c8599',
		cyan900: '#0b7285',
		teal50: '#e6fcf5',
		teal100: '#c3fae8',
		teal200: '#96f2d7',
		teal300: '#63e6be',
		teal400: '#38d9a9',
		teal500: '#20c997',
		teal600: '#12b886',
		teal700: '#0ca678',
		teal800: '#099268',
		teal900: '#087f5b',
		green50: '#ebfbee',
		green100: '#d3f9d8',
		green200: '#b2f2bb',
		green300: '#8ce99a',
		green400: '#69db7c',
		green500: '#51cf66',
		green600: '#40c057',
		green700: '#37b24d',
		green800: '#2f9e44',
		green900: '#2b8a3e',
		lime50: '#f4fce3',
		lime100: '#e9fac8',
		lime200: '#d8f5a2',
		lime300: '#c0eb75',
		lime400: '#a9e34b',
		lime500: '#94d82d',
		lime600: '#82c91e',
		lime700: '#74b816',
		lime800: '#66a80f',
		lime900: '#5c940d',
		yellow50: '#fff9db',
		yellow100: '#fff3bf',
		yellow200: '#ffec99',
		yellow300: '#ffe066',
		yellow400: '#ffd43b',
		yellow500: '#fcc419',
		yellow600: '#fab005',
		yellow700: '#f59f00',
		yellow800: '#f08c00',
		yellow900: '#e67700',
		orange50: '#fff4e6',
		orange100: '#ffe8cc',
		orange200: '#ffd8a8',
		orange300: '#ffc078',
		orange400: '#ffa94d',
		orange500: '#ff922b',
		orange600: '#fd7e14',
		orange700: '#f76707',
		orange800: '#e8590c',
		orange900: '#d9480f'
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
