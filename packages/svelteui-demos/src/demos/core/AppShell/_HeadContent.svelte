<script lang="ts">
	import Logo from './_Logo.svelte';
	import { Group, ActionIcon, Text, Anchor, Burger, Tooltip } from '@svelteuidev/core';
	import { Sun, Moon } from 'radix-icons-svelte';
	import { hotkey, useOs } from '@svelteuidev/composables';

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
			<Text color="blue" size="xl" override={{ d: 'none', '@sm': { d: 'block' } }}>
				SvelteUI Core
			</Text>
		</Group>
	</Anchor>
	<Tooltip label={`${mod} + J`}>
		<ActionIcon variant="default" on:click={toggle} size={30} use={[[hotkey, [['mod+J', toggle]]]]}>
			{#if isDark}
				<Moon />
			{:else}
				<Sun />
			{/if}
		</ActionIcon>
	</Tooltip>
</Group>
