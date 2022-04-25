// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	corePlugins: {
		preflight: true,
		float: false
	},
	purge: {
		enabled: process.env.NODE_ENV !== 'development',
		content: ['./src/**/*.js'],
		options: {
			defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || []
		}
	},
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#e7f5ff',
					100: '#d0ebff',
					200: '#a5d8ff',
					300: '#74c0fc',
					400: '#4dabf7',
					500: '#339af0',
					600: '#228be6',
					700: '#1c7ed6',
					800: '#1971c2',
					900: '#1864ab'
				},
				dark: {
					50: '#C1C2C5',
					100: '#A6A7AB',
					200: '#909296',
					300: '#5c5f66',
					400: '#373A40',
					500: '#2C2E33',
					600: '#25262b',
					700: '#1A1B1E',
					800: '#141517',
					900: '#101113'
				},
				coral: {
					light: '#FF6070',
					default: '#FF4154',
					dark: '#EB2135'
				}
			}
		},
		fontFamily: {
			sans: ['Inter', ...defaultTheme.fontFamily.sans],
			serif: ['Inter', ...defaultTheme.fontFamily.serif]
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1400px'
		},
		rotate: {
			...defaultTheme.rotate,
			'-30': '-30deg'
		},
		container: {
			padding: '1rem'
		},
		customForms: (theme) => ({
			sm: {
				'input, textarea, multiselect, select': {
					fontSize: theme('fontSize.sm'),
					padding: `${theme('spacing.1')} ${theme('spacing.2')}`
				},
				select: {
					paddingRight: `${theme('spacing.4')}`
				},
				'checkbox, radio': {
					width: theme('spacing.3'),
					height: theme('spacing.3')
				}
			}
		})
	},
	variants: {},
	plugins: [require('@tailwindcss/ui')]
};
