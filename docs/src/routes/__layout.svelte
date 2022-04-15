<script lang="ts">
	import { SvelteUIProvider } from '@svelteuidev/core';
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import { showSideBar } from '$lib/stores/sidebar';
	import Navbar from '$lib/Components/Head/Navbar.svelte';
	import SideBar from '$lib/Components/Head/SideBar.svelte';
	import '../app.css';

	let isDark: boolean =
		browser && document.documentElement.classList.contains('dark') ? true : false;

	$: sideBar = $showSideBar;
	$: val = $page.url.pathname.split('/');
	$: path = val[val.length - 1];
	$: checkTheme = (event: CustomEvent) => {
		isDark = !event.detail;
	};

	/**
	 * @todo if animation is not shown on small viewport, and the viewport expands, the animation is not shown
	 */
</script>

<svelte:head>
	<title>{path} | SvelteUI</title>
</svelte:head>

<SvelteUIProvider themeObserver={isDark ? 'dark' : 'light'} ssr>
	<Navbar on:toggle={(e) => checkTheme(e)} />
	{#if sideBar}
		<div class={!sideBar ? 'hidden' : 'md:hidden'}>
			<SideBar sidebar={sideBar} />
		</div>
	{/if}
	<div id="page" class="mt-20 mb-40">
		<slot />
	</div>
</SvelteUIProvider>
