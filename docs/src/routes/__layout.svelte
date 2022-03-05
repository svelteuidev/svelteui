<script lang="ts">
	import { theme } from '@svelteuidev/core';
	import { browser } from '$app/env';
	import Navbar from '$lib/Components/Head/Navbar.svelte';
	import '../app.css';

	if (browser && document.documentElement.classList.contains('dark')) {
		$theme.colorScheme = 'dark';
	}

	/**
	 * @todo Component's theme only changes on page refresh
	 * @todo if animation is not shown on small viewport, and the viewport expands, the animation is not shown
	 */
</script>

<div>
	<Navbar />
	<div id="page" class="mt-20 mb-40">
		<slot />
	</div>
</div>
