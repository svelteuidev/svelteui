<script lang="ts">
	import {
		SvelteUIProvider,
		TypographyProvider,
		Seo,
		AppShell,
		Navbar,
		Header,
		Title,
		Divider
	} from '$lib';
	import { fns } from '$lib';
	import { HeadContent, NavContent } from '../pages';
	import { page } from '$app/stores';

	let opened = false;
	let isDark = false;
	function toggleTheme() {
		isDark = !isDark;
	}
	function toggleOpened() {
		opened = !opened;
	}
	const path = $page.routeId.split(' ');
	$: currentPage =
		$page.routeId === ''
			? 'Homepage'
			: `${path[path.length - 1][0].toUpperCase()}${$page?.routeId.slice(1)}`;
</script>

<Seo title={currentPage} titleTemplate="%t% | SvelteUI" />
<SvelteUIProvider withGlobalStyles withNormalizeCSS themeObserver={isDark ? 'dark' : 'light'}>
	<TypographyProvider>
		<AppShell
			override={{
				main: { bc: isDark ? fns.themeColor('dark', 8) : fns.themeColor('gray', 0) }
			}}
			fixed
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
		>
			<Navbar
				hidden={!opened}
				fixed
				slot="navbar"
				hiddenBreakpoint="sm"
				width={{ sm: 200, lg: 250 }}
				override={{ p: '$mdPX' }}
			>
				<NavContent {isDark} />
			</Navbar>
			<Header fixed slot="header" height={60} override={{ p: '$mdPX' }}>
				<HeadContent {isDark} {opened} toggle={toggleTheme} toggleOpen={toggleOpened} />
			</Header>

			<Title weight="extrabold" tracking="tight" align="center">
				This is a test route to test the core package
			</Title>
			<Divider />
			<slot>This is the main content</slot>
		</AppShell>
	</TypographyProvider>
</SvelteUIProvider>
