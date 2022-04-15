<script lang="ts">
	import { SvelteUIProvider } from '@svelteuidev/core';
	import { theme } from '$lib/internal/modules/theme';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Head/Navbar/Navbar.svelte';

	let isDark: boolean = false;
	function toggle() {
		isDark = !isDark;
		if (isDark) theme.set('dark');
		if (!isDark) theme.set('light');
	}

	$: val = $page.url.pathname.split('/');
	$: path = val[val.length - 1];
</script>

<svelte:head>
	<title>{path} | SvelteUI</title>
</svelte:head>

<SvelteUIProvider ssr withGlobalStyles withNormalizeCSS themeObserver={isDark ? 'dark' : 'light'}>
	<div class="layout">
		<Navbar on:change={toggle} />
		<slot />
	</div>
</SvelteUIProvider>

<style>
	/* App wide Layout Styles */
	.layout {
		margin-top: 6rem;
	}
</style>
