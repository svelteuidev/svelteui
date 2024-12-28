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
	<Navbar slot="navbar" hidden={!opened} fixed>
		<NavbarContent />
	</Navbar>

	<Header fixed slot="header">
		<HeaderContent />
	</Header>

	<!-- Main content uses the default slot, so no need to explicitly declare it -->
	<ShellSection grow>
		<MainContent />
	</ShellSection>

	<Aside slot="aside">
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
