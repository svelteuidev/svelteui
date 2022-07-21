import { GithubLogo } from 'radix-icons-svelte';
import { default as DiscordLogo } from '../svgs/Discord.svelte';

const baseStyles = {};

const discordStyles = {
	...baseStyles,
	bc: '#6875f5',
	'&:hover': {
		bc: '#5850ec'
	}
};

const links = [
	{ title: 'Discord', href: 'https://discord.gg/2J2xmzCS79' },
	{ title: 'GitHub', href: 'https://github.com/svelteuidev/svelteui' }
];

export const config = {
	never: 'never',
	links,
	buttons: [
		{
			title: 'Discord',
			props: {
				override: discordStyles,
				color: 'blue',
				variant: 'filled',
				href: links[0].href
			},
			icon: DiscordLogo
		},
		{
			title: 'GitHub',
			props: {
				override: baseStyles,
				color: 'dark',
				variant: 'outline',
				href: links[1].href
			},
			icon: GithubLogo
		}
	]
};
