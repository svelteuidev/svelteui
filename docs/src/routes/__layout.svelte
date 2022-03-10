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
<!-- 
	Search element for later use
	<input
	type="text"
	id="table-search"
	class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
	placeholder="Search for items"
	/>
-->
