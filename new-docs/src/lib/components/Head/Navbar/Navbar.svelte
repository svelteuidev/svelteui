<script lang="ts">
	import { HamburgerMenu, GithubLogo } from 'radix-icons-svelte';
	import { ActionIcon, Switch, Text, Button } from '@svelteuidev/core';
	import { theme, DiscordLogo } from '$lib/internal/index';
	import { BurgerStyles, NavbarStyles, DiscordStyles } from './Navbar.styles';

	let screenW: number;

	$: isDark = $theme === 'dark' ? true : false;
</script>

<svelte:window bind:innerWidth={screenW} />

<header class={NavbarStyles()}>
	<nav>
		<div class="content">
			<span class={BurgerStyles()}>
				<ActionIcon size="lg">
					<HamburgerMenu color={isDark ? 'white' : 'black'} size={25} />
				</ActionIcon>
			</span>
			<Text
				override={{ display: 'flex', gap: '.25rem' }}
				underline={false}
				variant="link"
				align="center"
				root="a"
				href="/"
			>
				<span class="token-ui">SvelteUI</span>
				<span class="token-version">v0.5.5</span>
				<Button uppercase radius="xl" size="xs">Beta</Button>
			</Text>
			<div class="controls">
				<Switch on:change size="lg" />
				<ActionIcon
					root="a"
					href="https://discord.gg/2J2xmzCS79"
					target="_blank"
					rel="noreferrer"
					radius="md"
					variant="filled"
					override={DiscordStyles}
					size="xl"
				>
					<DiscordLogo color={'white'} size={24} />
				</ActionIcon>
				<ActionIcon
					root="a"
					href="https://github.com/Brisklemonade/svelteui"
					target="_blank"
					rel="noreferrer"
					radius="md"
					variant="default"
					size="xl"
				>
					<GithubLogo color={isDark ? 'white' : 'black'} size={24} />
				</ActionIcon>
			</div>
		</div>
	</nav>
</header>
