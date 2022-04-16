interface Link {
	changelog: Array<string>;
	theming: Array<string>;
	actions: Array<string>;
	core: Array<string>;
	utilities: Array<string>;
	motion: Array<string>;
}

const changelog = ['0-5-0', '0-5-5'];

const theming = ['svelteui-provider', 'override', 'create-styles', 'dark-theme', 'ssr'];

const actions = [
	'use-click-outside',
	'use-clipboard',
	'use-css-variable',
	'use-focus',
	'use-download',
	'use-page-leave',
	'use-tab-leave'
];

const core = ['button', 'code', 'loader', 'action-icon', 'image', 'switch', 'text', 'title'];

const utilities = ['os', 'raf-fn'];

const motion = ['typewriter', 'flipboard'];

export const LINKS: Readonly<Record<keyof Link, Array<string>>> = Object.freeze({
	changelog,
	theming,
	actions,
	core,
	utilities,
	motion
});
