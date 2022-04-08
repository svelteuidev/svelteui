import type { Packages } from '../types/index.ts';

export const PACKAGES = {
	CORE: 'svelteui-core',
	ACTIONS: 'svelteui-actions',
	MOTION: 'svelteui-motion',
	UTILITIES: 'svelteui-utilities',
	PRISM: 'svelteui-prism',
	DEMOS: 'svelteui-demos'
} as const;

export const pathToPackage = (pkg: Packages) => {
	switch (pkg) {
		case 'core':
			return `../packages/${PACKAGES.CORE}/package`;
		case 'actions':
			return `../packages/${PACKAGES.ACTIONS}/package`;
		case 'motion':
			return `../packages/${PACKAGES.MOTION}/package`;
		case 'utilities':
			return `../packages/${PACKAGES.UTILITIES}/package`;
		default:
			throw new Error(`must enter one of the ${Object.keys(PACKAGES).length} available packages`);
	}
};
