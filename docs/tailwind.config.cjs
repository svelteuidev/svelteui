const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
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
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
