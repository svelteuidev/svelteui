const preprocess = require('svelte-preprocess');
const path = require('path');
const { mergeConfig } = require('vite');

module.exports = {
	stories: [
    '../../packages/{svelteui-composables,svelteui-core,svelteui-dates}/src/**/*.stories.mdx',
    '../../packages/{svelteui-composables,svelteui-core,svelteui-dates}/src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
  ],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
		'storybook-dark-mode'
	],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	svelteOptions: {
		preprocess: preprocess()
	},
	features: {
		// On-demand store does not work for .svelte stories, only CSF.
		// Requires all stories to be loaded in bulk.
		// REFERENCE https://storybook.js.org/docs/svelte/configure/overview#feature-flags
		storyStoreV7: false
	},
	async viteFinal(config) {
		const userConfig = (await import(path.resolve(__dirname, '../../packages/svelteui-core/vite.config.js'))).default;

    // Remove Svelte plugins that would duplicate those added by the Storybook plugin
		const plugins = userConfig.plugins
			.flat(1)
			.filter(
				(p) => !p.name.startsWith('vite-plugin-svelte') || p.name === 'vite-plugin-svelte-kit'
			);
		return mergeConfig(config, {
			...userConfig,
			plugins
		});
	}
};
