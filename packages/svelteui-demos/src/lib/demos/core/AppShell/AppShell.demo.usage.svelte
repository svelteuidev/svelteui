<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { fns, AppShell, Navbar, Header, Title, Divider } from '@svelteuidev/core';
	import HeadContent from './HeadContent.svelte';
	import NavContent from './NavContent.svelte';

	let isDark = false;
	let opened = false;

	function toggleTheme() {
		isDark = !isDark;
	}
	function toggleOpened() {
		opened = !opened;
	}
<\/script>
    
<AppShell
	override={{
		main: { bc: isDark ? fns.themeColor('dark', 8) : fns.themeColor('gray', 0) }
	}}
>
	<Navbar
        slot="navbar"
		hidden={!opened}
		width={{ base: 300 }}
		override={{ p: 'xsdPX' }}
	>
		<NavContent />
	</Navbar>
	<Header slot="header" height={60} override={{ p: '$mdPX' }}>
		<HeadContent />
	</Header>

	<slot>This is the main content</slot>
</AppShell>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		spacing: false
	};
</script>

<script>
	import { fns, AppShell, Navbar, Header, ShellSection } from '@svelteuidev/core';
	// @ts-ignore
	import HeadContent from './_HeadContent.svelte';
	import NavContent from './_NavContent.svelte';
	let isDark = false;
	let opened = false;
	function toggleTheme() {
		isDark = !isDark;
	}
	function toggleOpened() {
		opened = !opened;
	}
</script>

<AppShell
	override={{
		main: {
			bc: isDark ? fns.themeColor('dark', 8) : fns.themeColor('gray', 0),
			color: isDark ? fns.themeColor('dark', 0) : 'black',
			ml: '0px !important'
		}
	}}
>
	<Navbar
		slot="navbar"
		hidden={!opened}
		hiddenBreakpoint="sm"
		width={{ base: '100%', sm: 300 }}
		height={500}
		override={{ p: '$xsPX', bc: isDark ? fns.themeColor('dark', 7) : 'white' }}
	>
		<ShellSection grow>
			<NavContent {isDark} />
		</ShellSection>
	</Navbar>
	<Header
		slot="header"
		height={60}
		override={{ p: '$mdPX', bc: isDark ? fns.themeColor('dark', 7) : 'white' }}
	>
		<HeadContent {isDark} {opened} toggle={toggleTheme} toggleOpen={toggleOpened} />
	</Header>
	<slot>This is the main content</slot>
</AppShell>
