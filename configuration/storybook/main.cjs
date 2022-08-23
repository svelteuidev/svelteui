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
		return mergeConfig(config, {
      resolve: {
        alias: {
          $lib: path.resolve(__dirname, '../../packages/svelteui-core/src'),
          $clib: path.resolve(__dirname, '../../packages/svelteui-composables/src'),
          $dlib: path.resolve(__dirname, '../../packages/svelteui-dates/src/lib'),
          '@svelteuidev/core': path.resolve(__dirname, '../../packages/svelteui-core/src'),
          '@svelteuidev/composables': path.resolve(__dirname, '../../packages/svelteui-composables/src'),
          '@svelteuidev/dates': path.resolve(__dirname, '../../packages/svelteui-dates/src/lib'),
        }
      },
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
		});
	}
};
