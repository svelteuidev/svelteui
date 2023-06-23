const path = require('path');
const { mergeConfig } = require('vite');

/**
 * Since Storybook@7 does not yet support monorepos, we are running the configuration
 * from package svelteui-core so that it uses it's svelte config.
 *
 * @see https://github.com/storybookjs/storybook/discussions/20490
 */
module.exports = {
	stories: [
		'../../packages/svelteui-core/src/components/**/*.stories.svelte',
		'../../packages/{svelteui-composables,svelteui-dates}/src/**/*.stories.svelte'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
		'storybook-dark-mode'
	],
	framework: '@storybook/sveltekit',
	core: {
		builder: '@storybook/builder-vite'
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			resolve: {
				alias: {
					$lib: path.resolve(__dirname, '../../packages/svelteui-core/src'),
					$clib: path.resolve(__dirname, '../../packages/svelteui-composables/src'),
					$dlib: path.resolve(__dirname, '../../packages/svelteui-dates/src'),
					'@svelteuidev/core': path.resolve(__dirname, '../../packages/svelteui-core/src'),
					'@svelteuidev/composables': path.resolve(
						__dirname,
						'../../packages/svelteui-composables/src'
					),
					'@svelteuidev/dates': path.resolve(__dirname, '../../packages/svelteui-dates/src')
				}
			},
			optimizeDeps: {
				include: ['storybook-dark-mode']
			}
		});
	}
};
