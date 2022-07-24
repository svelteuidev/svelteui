const sveltePreprocess = require('svelte-preprocess');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf'
	],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	// svelteOptions: {
	// 	preprocess: require('../svelte.config.js').preprocess
	// },
	svelteOptions: {
		preprocess: sveltePreprocess({
			babel: {
				presets: [
					[
						'@babel/preset-env',
						{
							loose: true,
							modules: false,
							targets: {
								esmodules: true
							}
						}
					]
				]
			}
		})
	},
	features: {
		storyStoreV7: true
	}
};
