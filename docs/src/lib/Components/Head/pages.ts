import { Cube, GithubLogo } from 'radix-icons-svelte';

export interface Page {
	title?: string;
	pathname: string;
	expand: boolean;
	links: { href: string; text: string }[];
}

export interface Links {
	href: string;
	text: string;
	icon?: unknown;
	iconClass?: string;
}

export const mainLinks: Array<Links> = [
	{
		href: '',
		text: 'Getting Started',
		icon: Cube,
		iconClass: 'border rounded-full p-1 bg-primary-600'
	},
	{
		href: 'contribute',
		text: 'Contributing',
		icon: GithubLogo,
		iconClass: 'border rounded-full p-1 bg-black'
	}
];

export const pages: Array<Page> = [
	{
		title: 'Changelog',
		pathname: 'changelog',
		expand: false,
		links: [
			{
				href: '',
				text: 'v0.5.0'
			}
		]
	},
	{
		title: 'Theming',
		pathname: 'theming',
		expand: false,
		links: [
			{
				href: '',
				text: 'SvelteuiWrapper'
			},
			{
				href: 'override',
				text: 'Override API'
			},
			{
				href: 'create-styles',
				text: 'Creating Styles'
			},
			{
				href: 'dark-theme',
				text: 'Dark Mode'
			},
			{
				href: 'ssr',
				text: 'Server Side Rendering'
			}
		]
	},
	{
		title: 'Svelteui-Actions',
		pathname: 'actions',
		expand: false,
		links: [
			{
				href: 'use-click-outside',
				text: 'use-click-outside'
			},
			{
				href: 'use-clipboard',
				text: 'use-clipboard'
			},
			{
				href: 'use-css-variable',
				text: 'use-css-variable'
			},
			{
				href: 'use-focus',
				text: 'use-focus'
			}
		]
	},
	{
		title: 'Svelteui-Core',
		pathname: 'core',
		expand: false,
		links: [
			{
				href: 'button',
				text: 'Button'
			},
			{
				href: 'code',
				text: 'Code'
			},
			{
				href: 'loader',
				text: 'Loader'
			}
		]
	},
	{
		title: 'Svelteui-Utilities',
		pathname: 'utilities',
		expand: false,
		links: [
			{
				href: 'os',
				text: 'os'
			}
		]
	},
	{
		title: 'Svelteui-Motion',
		pathname: 'motion',
		expand: false,
		links: [
			{
				href: 'typewriter',
				text: 'Typewriter'
			},
			{
				href: 'flipboard',
				text: 'Flipboard'
			}
		]
	}
];
