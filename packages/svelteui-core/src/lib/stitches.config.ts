import { createStitches, defaultThemeMap } from '@stitches/core';
import { colors } from './styles';

export const { css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches(
	{
		prefix: 'svelteui',
		theme: {
			colors,
			space: {
				0: '0rem',
				xs: '0.5rem',
				sm: '0.75rem',
				md: '1rem',
				lg: '1.375rem',
				xl: '2.25rem',
				px: '1px',
				1: '0.125rem',
				2: '0.25rem',
				3: '0.375rem',
				4: '0.5rem',
				5: '0.625rem',
				6: '0.75rem',
				7: '0.875rem',
				8: '1rem',
				9: '1.25rem',
				10: '1.5rem',
				11: '1.75rem',
				12: '2rem',
				13: '2.25rem',
				14: '2.5rem',
				15: '2.75rem',
				16: '3rem',
				17: '3.5rem',
				18: '4rem',
				20: '5rem',
				24: '6rem',
				28: '7rem',
				32: '8rem',
				36: '9rem',
				40: '10rem',
				44: '11rem',
				48: '12rem',
				52: '13rem',
				56: '14rem',
				60: '15rem',
				64: '16rem',
				72: '18rem',
				80: '20rem',
				96: '24rem'
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
				thin: 100,
				extralight: 200,
				light: 300,
				normal: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
				extrabold: 800
			},
			lineHeights: {
				xs: 1,
				sm: 1.25,
				md: 1.5,
				lg: 1.625,
				xl: 1.75
			},
			letterSpacings: {
				tighter: '-0.05em',
				tight: '-0.025em',
				normal: '0',
				wide: '0.025em',
				wider: '0.05em',
				widest: '0.1em'
			},
			sizes: {},
			radii: {
				xs: '2px',
				sm: '4px',
				md: '8px',
				lg: '16px',
				xl: '32px',
				squared: '33%',
				rounded: '50%',
				pill: '9999px'
			},
			shadows: {
				xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
				sm: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
				md: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
				lg: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',
				xl: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px'
			},
			zIndices: {
				1: '100',
				2: '200',
				3: '300',
				4: '400',
				5: '500',
				10: '1000',
				max: '9999'
			},
			borderWidths: {
				light: '1px',
				normal: '2px',
				bold: '3px',
				extrabold: '4px',
				black: '5px'
			},
			borderStyles: {},
			transitions: {}
		},
		media: {
			sm: '(min-width: 640px)',
			md: '(min-width: 768px)',
			lg: '(min-width: 1024px)',
			xl: '(min-width: 1280px)',
			xxl: '(min-width: 1536px)'
		},
		utils: {
			focusRing: (value: 'auto' | 'always' | 'never') => ({
				WebkitTapHighlightColor: 'transparent',

				'&:focus': {
					outlineOffset: 2,
					outline: value === 'always' || value === 'auto' ? '2px solid $primary' : 'none'
				},

				'&:focus:not(:focus-visible)': {
					outline: value === 'auto' || value === 'never' ? 'none' : undefined
				}
			}),
			/** padding top */
			pt: (value: string | number) => ({
				paddingTop: value
			}),
			pr: (value: string | number) => ({
				paddingRight: value
			}),
			pb: (value: string | number) => ({
				paddingBottom: value
			}),
			pl: (value: string | number) => ({
				paddingLeft: value
			}),
			px: (value: string | number) => ({
				paddingLeft: value,
				paddingRight: value
			}),
			py: (value: string | number) => ({
				paddingTop: value,
				paddingBottom: value
			}),
			// Abbreviated padding properties
			m: (value: string | number) => ({
				margin: value
			}),
			/** margin-top */
			mt: (value: string | number) => ({
				marginTop: value
			}),
			mr: (value: string | number) => ({
				marginRight: value
			}),
			mb: (value: string | number) => ({
				marginBottom: value
			}),
			ml: (value: string | number) => ({
				marginLeft: value
			}),
			mx: (value: string | number) => ({
				marginLeft: value,
				marginRight: value
			}),
			my: (value: string | number) => ({
				marginTop: value,
				marginBottom: value
			}),
			ta: (value: string | number) => ({
				textAlign: value
			}),
			tt: (value: string | number) => ({
				textTransform: value
			}),
			to: (value: string | number) => ({
				textOverflow: value
			}),
			d: (value: string | number) => ({ display: value }),
			dflex: (value: string | number) => ({
				display: 'flex',
				alignItems: value,
				justifyContent: value
			}),
			fd: (value: string | number) => ({
				flexDirection: value
			}),
			fw: (value: string | number) => ({ flexWrap: value }),
			ai: (value: string | number) => ({
				alignItems: value
			}),
			ac: (value: string | number) => ({
				alignContent: value
			}),
			jc: (value: string | number) => ({
				justifyContent: value
			}),
			as: (value: string | number) => ({
				alignSelf: value
			}),
			fg: (value: string | number) => ({ flexGrow: value }),
			fs: (value: string | number) => ({
				fontSize: value
			}),
			fb: (value: string | number) => ({
				flexBasis: value
			}),
			bc: (value: string | number) => ({
				backgroundColor: value
			}),
			bf: (value: string | number) => ({
				backdropFilter: value
			}),
			bg: (value: string | number) => ({
				background: value
			}),
			bgBlur: (value: string | number) => ({
				bf: 'saturate(180%) blur(10px)',
				bg: `${value}66`
			}),
			bgColor: (value: string | number) => ({
				backgroundColor: value
			}),
			backgroundClip: (value: string | number) => ({
				WebkitBackgroundClip: value,
				backgroundClip: value
			}),
			bgClip: (value: string | number) => ({
				WebkitBackgroundClip: value,
				backgroundClip: value
			}),
			br: (value: string | number) => ({
				borderRadius: value
			}),
			bw: (value: string | number) => ({
				borderWidth: value
			}),
			btrr: (value: string | number) => ({
				borderTopRightRadius: value
			}),
			bbrr: (value: string | number) => ({
				borderBottomRightRadius: value
			}),
			bblr: (value: string | number) => ({
				borderBottomLeftRadius: value
			}),
			btlr: (value: string | number) => ({
				borderTopLeftRadius: value
			}),
			bs: (value: string | number) => ({
				boxShadow: value
			}),
			normalShadow: (value: string | number) => ({
				boxShadow: `0 4px 14px 0 $colors${value}`
			}),
			normalShadowVar: (value: string | number) => ({
				boxShadow: `0 4px 14px 0 ${value}`
			}),
			lh: (value: string | number) => ({
				lineHeight: value
			}),
			ov: (value: string | number) => ({ overflow: value }),
			ox: (value: string | number) => ({
				overflowX: value
			}),
			oy: (value: string | number) => ({
				overflowY: value
			}),
			pe: (value: string | number) => ({
				pointerEvents: value
			}),
			events: (value: string | number) => ({
				pointerEvents: value
			}),
			us: (value: string | number) => ({
				WebkitUserSelect: value,
				userSelect: value
			}),
			userSelect: (value: string | number) => ({
				WebkitUserSelect: value,
				userSelect: value
			}),
			w: (value: string | number) => ({ width: value }),
			h: (value: string | number) => ({ height: value }),
			mw: (value: string | number) => ({ maxWidth: value }),
			maxW: (value: string | number) => ({
				maxWidth: value
			}),
			mh: (value: string | number) => ({
				maxHeight: value
			}),
			maxH: (value: string | number) => ({
				maxHeight: value
			}),
			size: (value: string | number) => ({
				width: value,
				height: value
			}),
			minSize: (value: string | number) => ({
				minWidth: value,
				minHeight: value,
				width: value,
				height: value
			}),
			sizeMin: (value: string | number) => ({
				minWidth: value,
				minHeight: value,
				width: value,
				height: value
			}),
			maxSize: (value: string | number) => ({
				maxWidth: value,
				maxHeight: value
			}),
			sizeMax: (value: string | number) => ({
				maxWidth: value,
				maxHeight: value
			}),
			appearance: (value: string | number) => ({
				WebkitAppearance: value,
				appearance: value
			}),
			scale: (value: string | number) => ({
				transform: `scale(${value})`
			}),
			linearGradient: (value: string | number) => ({
				backgroundImage: `linear-gradient(${value})`
			}),
			tdl: (value: string | number) => ({
				textDecorationLine: value
			}),
			// Text gradient effect
			textGradient: (value: string | number) => ({
				backgroundImage: `linear-gradient(${value})`,
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent'
			})
		},
		themeMap: {
			...defaultThemeMap,
			width: 'space',
			height: 'space',
			minWidth: 'space',
			maxWidth: 'space',
			minHeight: 'space',
			maxHeight: 'space',
			flexBasis: 'space',
			gridTemplateColumns: 'space',
			gridTemplateRows: 'space',
			blockSize: 'space',
			minBlockSize: 'space',
			maxBlockSize: 'space',
			inlineSize: 'space',
			minInlineSize: 'space',
			maxInlineSize: 'space',
			borderWidth: 'borderWeights'
		}
	}
);

/** Function for dark theme */
const dark = createTheme('dark-theme', {
	colors,
	shadows: {
		xs: '-4px 0 15px rgb(0 0 0 / 50%)',
		sm: '0 5px 20px -5px rgba(20, 20, 20, 0.1)',
		md: '0 8px 30px rgba(20, 20, 20, 0.15)',
		lg: '0 30px 60px rgba(20, 20, 20, 0.15)',
		xl: '0 40px 80px rgba(20, 20, 20, 0.25)'
	}
});

const SvelteUIGlobalCSS = globalCss({
	a: {
		focusRing: 'auto'
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
export { SvelteUIGlobalCSS, NormalizeCSS, dark };
