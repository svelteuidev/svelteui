<script lang="ts">
	import { theme } from '@svelteuidev/core';
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import Navbar from '$lib/Components/Head/Navbar.svelte';
	import '../app.css';

	if (browser && document.documentElement.classList.contains('dark')) {
		$theme.colorScheme = 'dark';
	}

	const val = $page.url.pathname.split('/');
	const path = val[val.length - 1];

	/**
	 * @todo Component's theme only changes on page refresh
	 * @todo if animation is not shown on small viewport, and the viewport expands, the animation is not shown
	 */
</script>

<svelte:head>
	<title>{path} | SvelteUI</title>
</svelte:head>

<div>
	<Navbar />
	<div id="page" class="mt-20 mb-40">
		<slot />
	</div>
</div>
