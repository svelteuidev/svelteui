import { createStitches, defaultThemeMap } from '@stitches/core';
import { colors } from './styles';
import type * as Stitches from '@stitches/core';

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
			pt: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				paddingTop: value
			}),
			pr: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				paddingRight: value
			}),
			pb: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				paddingBottom: value
			}),
			pl: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				paddingLeft: value
			}),
			px: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				paddingLeft: value,
				paddingRight: value
			}),
			py: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				paddingTop: value,
				paddingBottom: value
			}),
			/** margin */
			m: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				margin: value
			}),
			/** margin-top */
			mt: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				marginTop: value
			}),
			mr: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				marginRight: value
			}),
			mb: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				marginBottom: value
			}),
			ml: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				marginLeft: value
			}),
			mx: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				marginLeft: value,
				marginRight: value
			}),
			my: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				marginTop: value,
				marginBottom: value
			}),
			ta: (value: Stitches.PropertyValue<'textAlign'>) => ({
				textAlign: value
			}),
			tt: (value: Stitches.PropertyValue<'textTransform'>) => ({
				textTransform: value
			}),
			to: (value: Stitches.PropertyValue<'textOverflow'>) => ({
				textOverflow: value
			}),
			d: (value: Stitches.PropertyValue<'display'>) => ({ display: value }),
			dflex: (value: Stitches.PropertyValue<'alignItems' | 'justifyContent'>) => ({
				display: 'flex',
				alignItems: value,
				justifyContent: value
			}),
			fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
				flexDirection: value
			}),
			fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
			ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
				alignItems: value
			}),
			ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
				alignContent: value
			}),
			jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
				justifyContent: value
			}),
			as: (value: Stitches.PropertyValue<'alignSelf'>) => ({
				alignSelf: value
			}),
			fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
			fs: (value: Stitches.PropertyValue<'fontSize'>) => ({
				fontSize: value
			}),
			fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({
				flexBasis: value
			}),
			bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
				backgroundColor: value
			}),
			bf: (value: Stitches.PropertyValue<'backdropFilter'>) => ({
				backdropFilter: value
			}),
			bg: (value: Stitches.PropertyValue<'background'>) => ({
				background: value
			}),
			bgBlur: (value: Stitches.PropertyValue<'background'>) => ({
				bf: 'saturate(180%) blur(10px)',
				bg: value
			}),
			bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
				backgroundColor: value
			}),
			backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
				WebkitBackgroundClip: value,
				backgroundClip: value
			}),
			bgClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
				WebkitBackgroundClip: value,
				backgroundClip: value
			}),
			br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
				borderRadius: value
			}),
			bw: (value: Stitches.PropertyValue<'borderWidth'>) => ({
				borderWidth: value
			}),
			btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
				borderTopRightRadius: value
			}),
			bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
				borderBottomRightRadius: value
			}),
			bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
				borderBottomLeftRadius: value
			}),
			btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
				borderTopLeftRadius: value
			}),
			bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
				boxShadow: value
			}),
			normalShadow: (value: keyof typeof colors) => ({
				boxShadow: `0 4px 14px 0 $${value}`
			}),
			lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
				lineHeight: value
			}),
			ov: (value: Stitches.PropertyValue<'overflow'>) => ({ overflow: value }),
			ox: (value: Stitches.PropertyValue<'overflowX'>) => ({
				overflowX: value
			}),
			oy: (value: Stitches.PropertyValue<'overflowY'>) => ({
				overflowY: value
			}),
			pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
				pointerEvents: value
			}),
			events: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
				pointerEvents: value
			}),
			us: (value: Stitches.PropertyValue<'userSelect'>) => ({
				WebkitUserSelect: value,
				userSelect: value
			}),
			userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
				WebkitUserSelect: value,
				userSelect: value
			}),
			w: (value: Stitches.ScaleValue<'space'>) => ({ width: value }),
			h: (value: Stitches.ScaleValue<'space'> | number | string) => ({ height: value }),
			mw: (value: Stitches.ScaleValue<'scale'> | number | string) => ({ maxWidth: value }),
			maxW: (value: Stitches.ScaleValue<'scale'> | number | string) => ({
				maxWidth: value
			}),
			mh: (value: Stitches.ScaleValue<'scale'> | number | string) => ({
				maxHeight: value
			}),
			maxH: (value: Stitches.ScaleValue<'scale'> | number | string) => ({
				maxHeight: value
			}),
			size: (value: Stitches.ScaleValue<'space'> | number | string) => ({
				width: value,
				height: value
			}),
			minSize: (value: Stitches.ScaleValue<'scale'> | number | string) => ({
				minWidth: value,
				minHeight: value,
				width: value,
				height: value
			}),
			sizeMin: (value: Stitches.ScaleValue<'scale'> | number | string) => ({
				minWidth: value,
				minHeight: value,
				width: value,
				height: value
			}),
			maxSize: (value: Stitches.ScaleValue<'scale'> | number | string) => ({
				maxWidth: value,
				maxHeight: value
			}),
			sizeMax: (value: Stitches.ScaleValue<'scale'> | number | string) => ({
				maxWidth: value,
				maxHeight: value
			}),
			appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
				WebkitAppearance: value,
				appearance: value
			}),
			scale: (value: string) => ({
				transform: `scale(${value})`
			}),
			linearGradient: (value: string) => ({
				backgroundImage: `linear-gradient(${value})`
			}),
			tdl: (value: Stitches.PropertyValue<'textDecorationLine'>) => ({
				textDecorationLine: value
			}),
			// Text gradient effect
			textGradient: (value: string) => ({
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
