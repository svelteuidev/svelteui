const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
