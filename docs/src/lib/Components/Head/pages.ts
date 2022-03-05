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
		title: 'Svelteui-Actions',
		pathname: 'actions',
		expand: false,
		links: [
			{
				href: 'use-click-outside',
				text: 'use-click-outside'
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
			}
		]
	},
	{
		title: 'Svelteui-Utilities',
		pathname: 'utilities',
		expand: false,
		links: [
			{
				href: 'useos',
				text: 'useOs'
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
			}
		]
	}
];
