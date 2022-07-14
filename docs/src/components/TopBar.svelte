<script lang="ts">
	import { ActionIcon, Tooltip, Menu, Divider, colorScheme } from '@svelteuidev/core';
	import { GithubLogo, Sun, Moon } from 'radix-icons-svelte';
	import { mobile } from 'components';
	import Discord from '../components/svgs/Discord.svelte';

	const discordLogo = {
		bc: '#6875f5',
		'&:hover': {
			bc: '#5850ec'
		}
	};

	function toggleTheme() {
		colorScheme.update((v) => (v === 'light' ? 'dark' : 'light'));
	}

	export const links = [
		{ title: 'Discord', href: 'https://discord.gg/2J2xmzCS79' },
		{ title: 'GitHub', href: 'https://github.com/svelteuidev/svelteui' }
	];
</script>

{#if $mobile}
	<Menu mr="xl" placement="end" override={{ '& .svelteui-c-lgEqbM': { right: '$0' } }}>
		<Menu.Label>Navigation</Menu.Label>
		{#each links as { title, href }}
			<Menu.Item root="a" {href}>
				{title}
			</Menu.Item>
		{/each}
		<Divider />
		<Menu.Label>Experimental Theme Toggle</Menu.Label>
		<Menu.Item component="div" override={{ '&:hover': { backgroundColor: 'transparent' } }}>
			<ActionIcon variant="default" on:click={toggleTheme} size={30}>
				{#if $colorScheme === 'dark'}
					<Moon />
				{:else}
					<Sun />
				{/if}
			</ActionIcon>
		</Menu.Item>
	</Menu>
{:else}
	<div
		style={`padding-right: ${$mobile ? '0rem' : '0.75rem'}; padding-top: ${
			$mobile ? '0rem' : '0.75rem'
		}`}
	>
		<ul>
			<li>
				<Tooltip withArrow label="Discord">
					<ActionIcon override={discordLogo} size="xl" color="blue" variant="filled">
						<Discord size={25} />
					</ActionIcon>
				</Tooltip>
			</li>
			<li>
				<Tooltip withArrow label="GitHub">
					<ActionIcon size="xl" color="dark" variant="outline">
						<GithubLogo size={25} />
					</ActionIcon>
				</Tooltip>
			</li>
			<li>
				<Tooltip withArrow label="Experimental Theme Toggle">
					<ActionIcon size="xl" color="dark" variant="outline" on:click={toggleTheme}>
						{#if $colorScheme === 'light'}
							<Moon size={25} />
						{:else}
							<Sun size={25} />
						{/if}
					</ActionIcon>
				</Tooltip>
			</li>
		</ul>
	</div>
{/if}
