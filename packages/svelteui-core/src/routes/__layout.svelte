<script lang="ts">
	import {
		SvelteUIProvider,
		TypographyProvider,
		Seo,
		AppShell,
		Header,
		Title,
		Divider,
		Container,
		Text
	} from '$lib';
	import { fns } from '$lib';
	import { HeadContent } from '../pages';
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
				main: { bc: isDark ? fns.themeColor('dark', 8) : fns.themeColor('gray', 0) },
				'& .main': { px: 0 }
			}}
			fixed
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
		>
			<Header fixed slot="header" height={60} override={{ p: '$mdPX' }}>
				<HeadContent {isDark} {opened} toggle={toggleTheme} toggleOpen={toggleOpened} />
			</Header>

			<Title weight="extrabold" tracking="tight" align="center">
				This is a test route to test the core package
			</Title>
			<Text align="center">TO DO: add inline documentation to undocumented components</Text>
			<Divider />
			<Container size="xl" override={{ px: '$10' }}>
				<slot>This is the main content</slot>
			</Container>
		</AppShell>
	</TypographyProvider>
</SvelteUIProvider>
