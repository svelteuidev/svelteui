<script lang="ts">
	import Logo from './Logo.svelte';
	import { Group, ActionIcon, Text, Anchor, Burger, Tooltip } from '$lib';
	import { Sun, Moon, GithubLogo } from 'radix-icons-svelte';
	import { useOs, hotkey } from '@svelteuidev/composables';

	const os = useOs();
	const mod = os === 'macos' ? '⌘' : 'ctrl';

	export let isDark: boolean;
	export let opened: boolean;
	export let toggle: () => void;
	export let toggleOpen: () => void;
</script>

<Group override={{ height: '100%', px: 20 }} position="apart">
	<Burger {opened} on:click={toggleOpen} override={{ d: 'block', '@sm': { d: 'none' } }} />
	<Anchor
		underline={false}
		href="/"
		override={{ '&:hover': { textDecoration: 'none !important' } }}
	>
		<Group>
			<Logo size={35} />
			<Text size="xl" override={{ d: 'none', '@sm': { d: 'block' } }}>SvelteUI Core</Text>
		</Group>
	</Anchor>
	<Group>
		<Tooltip withArrow label="GitHub">
			<ActionIcon
				root="a"
				variant="default"
				size={30}
				href="https://github.com/svelteuidev/svelteui"
				external
			>
				<GithubLogo color="black" />
			</ActionIcon>
		</Tooltip>
		<Tooltip withArrow label={`${mod} + J`}>
			<ActionIcon variant="default" on:click={toggle} size={30}>
				<div use:hotkey={[['mod+J', () => toggle()]]} />
				{#if isDark}
					<Moon />
				{:else}
					<Sun />
				{/if}
			</ActionIcon>
		</Tooltip>
	</Group>
</Group>
