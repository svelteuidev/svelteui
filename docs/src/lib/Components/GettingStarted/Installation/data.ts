export const PACKAGE_DATA = [
	{
		package: '@svelteuidev/actions',
		description: 'Collection of useful lifecycle functions',
		dependencies: ['@svelteuidev/actions']
	},
	{
		package: '@svelteuidev/core',
		description: 'Core components library: inputs, buttons, overlays, etc',
		dependencies: ['@svelteuidev/core', '@svelteuidev/actions']
	},
	{
		package: '@svelteuidev/utilities',
		description: 'Utility functions to assist in development',
		dependencies: ['@svelteuidev/core', '@svelteuidev/actions', '@svelteuidev/utilities']
	},
	{
		package: '@svelteuidev/motion',
		description: 'Transition functions and Animation Components',
		dependencies: ['@svelteuidev/core', '@svelteuidev/actions', '@svelteuidev/motion']
	}
];
