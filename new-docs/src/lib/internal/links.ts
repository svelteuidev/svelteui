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

const actions = ['use-click-outside', 'use-clipboard', 'use-css-variable', 'use-focus'];

const core = ['button', 'code', 'loader'];

const utilities = ['os', 'rafFn'];

const motion = ['typewriter', 'flipboard'];

export const LINKS: Readonly<Record<keyof Link, Array<string>>> = Object.freeze({
	changelog,
	theming,
	actions,
	core,
	utilities,
	motion
});
