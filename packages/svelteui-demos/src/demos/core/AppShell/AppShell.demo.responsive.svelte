<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { fns, AppShell, Navbar, Header, Aside, Footer, ShellSection } from '@svelteuidev/core';
<\/script>

<AppShell
	fixed
	navbarOffsetBreakpoint="sm"
	asideOffsetBreakpoint="sm"
>
	{#snippet navbar()}
		<Navbar hidden={!opened} fixed>
			<NavbarContent />
		</Navbar>
	{/snippet}

	{#snippet header()}
		<Header fixed>
			<HeaderContent />
		</Header>
	{/snippet}

	<!-- Main content uses the default slot, so no need to explicitly declare it -->
	<ShellSection grow>
		<MainContent />
	</ShellSection>

	{#snippet aside()}
		<Aside>
			<AsideContent />
		</Aside>
	{/snippet}

	{#snippet footer()}
		<Footer>
			<FooterContent />
		</Footer>
	{/snippet}
</AppShell>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		toggle: true
	};
</script>

<script>
	import { Text } from '@svelteuidev/core';
	import { ArrowRight } from 'radix-icons-svelte';
</script>

<Text weight="bold" align="center" tracking="tight">
	Click the toggle to see <ArrowRight />
</Text>
