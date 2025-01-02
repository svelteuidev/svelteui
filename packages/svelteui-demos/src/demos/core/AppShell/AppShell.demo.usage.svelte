<script lang="ts" module>
	/* eslint-disable @typescript-eslint/ban-ts-comment */
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { fns, AppShell, Navbar, Header, Title, Divider } from '@svelteuidev/core';
	import HeadContent from './HeadContent.svelte';
	import NavContent from './NavContent.svelte';

	let { children } = $props();

	let isDark = $state(false);
	let opened = $state(false);

	function toggleTheme() {
		isDark = !isDark;
	}
	function toggleOpened() {
		opened = !opened;
	}
<\/script>

<AppShell>
	{#snippet navbar()}
		<Navbar hidden={!opened}>
			<NavContent />
		</Navbar>
	{/snippet}

	{#snippet header()}
		<Header>
			<HeadContent />
		</Header>
	{/snippet}

	{#if children}
		{@render children()}
	{:else}
		This is the main content
	{/if}
</AppShell>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		spacing: false
	};
</script>

<script lang="ts">
	import { fns, AppShell, Navbar, Header, ShellSection } from '@svelteuidev/core';
	import HeadContent from './_HeadContent.svelte';
	import NavContent from './_NavContent.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	let isDark = $state(false);
	let opened = $state(false);

	function toggleTheme() {
		isDark = !isDark;
	}
	function toggleOpened() {
		opened = !opened;
	}
</script>

<AppShell
	fixed={false}
	override={{
		main: {
			bc: isDark ? fns.themeColor('dark', 8) : fns.themeColor('gray', 0),
			color: isDark ? fns.themeColor('dark', 0) : 'black',
			ml: '0px !important'
		}
	}}
>
	{#snippet navbar()}
		<Navbar
			hidden={!opened}
			hiddenBreakpoint="sm"
			width={{ base: '100%', sm: 300 }}
			height={500}
			fixed={false}
			override={{ p: '$xsPX', bc: isDark ? fns.themeColor('dark', 7) : 'white' }}
		>
			<ShellSection grow>
				<NavContent {isDark} />
			</ShellSection>
		</Navbar>
	{/snippet}
	{#snippet header()}
		<Header height={60} override={{ p: '$mdPX', bc: isDark ? fns.themeColor('dark', 7) : 'white' }}>
			<HeadContent {isDark} {opened} toggle={toggleTheme} toggleOpen={toggleOpened} />
		</Header>
	{/snippet}
	{#if children}
		{@render children()}
	{:else}
		This is the main content
	{/if}
</AppShell>
