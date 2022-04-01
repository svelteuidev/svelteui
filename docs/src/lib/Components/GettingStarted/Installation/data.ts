import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const PACKAGE_DATA = writable([
	{
		id: 1,
		package: '@svelteuidev/actions',
		description: 'Collection of useful lifecycle functions',
		dependencies: ['@svelteuidev/actions']
	},
	{
		id: 2,
		package: '@svelteuidev/core',
		description: 'Core components library: inputs, buttons, overlays, etc',
		dependencies: ['@svelteuidev/core', '@svelteuidev/actions']
	},
	{
		id: 3,
		package: '@svelteuidev/utilities',
		description: 'Utility functions to assist in development',
		dependencies: ['@svelteuidev/core', '@svelteuidev/actions', '@svelteuidev/utilities']
	},
	{
		id: 4,
		package: '@svelteuidev/motion',
		description: 'Transition functions and Animation Components',
		dependencies: ['@svelteuidev/core', '@svelteuidev/actions', '@svelteuidev/motion']
	}
]);

export const deps: Writable<string[]> = writable([]);
