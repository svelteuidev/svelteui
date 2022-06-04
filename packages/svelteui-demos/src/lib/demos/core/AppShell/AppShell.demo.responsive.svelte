<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { fns, AppShell, Navbar, Header, Aside, Footer, ShellSection } from '@svelteuidev/core';
<\/script>

<AppShell
	override={{
		main: { 'dark-theme &': { bc: fns.themeColor('dark', 8) }, bc: fns.themeColor('gray', 0) }
	}}
	fixed
	navbarOffsetBreakpoint="sm"
	asideOffsetBreakpoint="sm"
>
	<Navbar
		slot="navbar"
		hidden={!opened}
		fixed
		hiddenBreakpoint="sm"
		width={{ sm: 200, lg: 250 }}
		override={{ p: '$mdPX' }}
	>
		<NavbarContent />
	</Navbar>

	<Header fixed slot="header" height={60} override={{ p: '$mdPX' }}>
		<HeaderContent />
	</Header>

	<!-- Main content uses the default slot, so no need to explicitly declare it -->
	<ShellSection grow>
		<MainContent />
	</ShellSection>

	<Aside slot="aside" width={{ base: 200 }}>
		<AsideContent />
	</Aside>

	<Footer slot="footer">
		<FooterContent />
	</Footer>
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
