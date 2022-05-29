<script lang="ts">
	import { page } from '$app/stores';
	import { SvelteUIProvider, Seo, Button, Text, Center, Container, Stack, Group, Kbd } from '$lib';
	import { Anchor, Divider } from '$lib';
	import { hotkey } from '@svelteuidev/actions';
	import { os as _os } from '@svelteuidev/utilities';
	import type { SvelteUIGradient } from '$lib';

	let darkMode: boolean = false;
	const os = _os();
	const mod = os === 'macos' ? '⌘' : 'ctrl';

	const toggleTheme = () => {
		darkMode = !darkMode;
	};

	const GRADIENTS: SvelteUIGradient[] = [
		{ from: 'blue', to: 'cyan', deg: 45 },
		{ from: 'red', to: 'pink', deg: 45 }
	];

	const path = $page.routeId.split(' ');
	let x: number;
	let y: number;

	$: mobile = x < 525;
	$: currentPage =
		$page.routeId === ''
			? 'Homepage'
			: `${path[path.length - 1][0].toUpperCase()}${$page?.routeId.slice(1)}`;
</script>

<svelte:window bind:innerWidth={x} bind:innerHeight={y} />
<Seo title={currentPage} titleTemplate="%t% | SvelteUI" />
<SvelteUIProvider
	override={{ overflow: 'hidden' }}
	withGlobalStyles
	withNormalizeCSS
	themeObserver={darkMode ? 'dark' : 'light'}
>
	<Center override={{ pt: '$4' }}>
		<Group direction={mobile ? 'column' : 'row'} spacing="xl" position="center" noWrap>
			<Stack spacing="md">
				<Button
					on:click={toggleTheme}
					gradient={darkMode ? GRADIENTS[1] : GRADIENTS[0]}
					variant="gradient"
					use={[[hotkey, [['mod+J', toggleTheme]]]]}
				>
					{darkMode ? 'Dark' : 'Light'} Mode
				</Button>
				<Group position="center" spacing="xs">
					<Kbd>{mod}</Kbd>+<Kbd>J</Kbd>
				</Group>
			</Stack>
			<Stack>
				<Text weight="bold" size={40} align="center" root="h1">Welcome to a SvelteUI package!</Text>
				<Text weight="medium" size="xl" align="center" root="p">
					This is a test route to test the core package
				</Text>
			</Stack>
			{#if currentPage === 'Homepage'}
				<Anchor href="/test">Go to test page</Anchor>
			{:else}
				<Anchor href="/">Go to homepage</Anchor>
			{/if}
		</Group>
	</Center>
	<Divider />
	<Container override={{ padding: '$10' }} id="main-container" size="xl">
		<slot />
	</Container>
</SvelteUIProvider>

<!-- 

	<script lang="ts">
		import { SvelteUIProvider, AppShell, Navbar, Header, Footer, Aside, ShellSection } from '$lib';
		import { theme, fns } from '$lib';
	</script>
	
	<SvelteUIProvider withGlobalStyles withNormalizeCSS>
		<AppShell
		override={{
			main: { 'dark-theme &': { bc: fns.themeColor('dark', 8) }, bc: fns.themeColor('gray', 0) }
		}}
		fixed
		>
		<Navbar slot="navbar" width={{ base: 200 }} height={500} override={{ padding: `${'$xs'}px` }}>
			<div>Navbar Content</div>
			<ShellSection>
				<div>Navbar Content in section</div>
			</ShellSection>
		</Navbar>
		<Header slot="header" height={60} override={{ padding: `${'$xs'}px` }}>
			<div>Header Content</div>
			<ShellSection>
				<div>Header Content in section</div>
			</ShellSection>
		</Header>
		
		<div>Main Content</div>
		<ShellSection grow>
			<div>Main Content in section</div>
		</ShellSection>
		
		<Aside width={{ base: 200 }} slot="aside">
			<div>Aside Content</div>
			<ShellSection grow>
				<div>Aside Content in section</div>
			</ShellSection>
		</Aside>
		
		<Footer slot="footer">
			<div>Footer Content</div>
			<ShellSection grow>
				<div>Footer Content in section</div>
			</ShellSection>
		</Footer>
	</AppShell>
</SvelteUIProvider>

-->
