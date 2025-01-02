<script lang="ts">
	import Logo from './_Logo.svelte';
	import { Group, ActionIcon, Text, Anchor, Burger, Tooltip } from '@svelteuidev/core';
	import { Sun, Moon } from 'radix-icons-svelte';
	import { hotkey, useOs } from '@svelteuidev/composables';

	const os = useOs();
	const mod = os === 'macos' ? '⌘' : 'ctrl';

	interface Props {
		isDark: boolean;
		opened: boolean;
		codeVisible: () => void;
		toggleOpen: () => void;
	}

	let { isDark, opened, toggle, toggleOpen }: Props = $props();
</script>

<Group override={{ height: '100%', px: 20 }} position="apart">
	<Burger {opened} onclick={toggleOpen} override={{ d: 'block', '@sm': { d: 'none' } }} />
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
	<Tooltip labelComponent={`${mod} + J`}>
		<ActionIcon variant="default" onclick={toggle} size={30} use={[[hotkey, [['mod+J', toggle]]]]}>
			{#if isDark}
				<Moon />
			{:else}
				<Sun />
			{/if}
		</ActionIcon>
	</Tooltip>
</Group>
