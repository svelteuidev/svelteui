<script lang="ts">
	import { SvelteUIProvider } from '@svelteuidev/core';
	import Navbar from '$lib/components/Head/Navbar.svelte';

	let isDark: boolean = true;
	function toggle() {
		isDark = !isDark;
	}
</script>

<SvelteUIProvider ssr withGlobalStyles withNormalizeCSS themeObserver={isDark ? 'dark' : 'light'}>
	<div>
		<Navbar on:change={toggle} />
		<slot />
	</div>
</SvelteUIProvider>

<style>
	:global(html) {
		background: var(--url) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}
</style>
