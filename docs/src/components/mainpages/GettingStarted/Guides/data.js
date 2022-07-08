import * as icon from './icons';

export const ID = {
	svelte: 0,
	kit: 1,
	elderjs: 2
};
export const STARTGUIDE_DATA = [
	{ id: 'svelte', title: 'Svelte', icon: icon.Svelte, template: 'npm create vite@latest' },
	{ id: 'kit', title: 'Svelte Kit', icon: icon.SvelteKit, template: 'npm init svelte@next my-app' },
	{
		id: 'elderjs',
		title: 'ElderJs',
		icon: icon.ElderJs,
		template: 'npx degit Elderjs/template elderjs-app'
	}
];
