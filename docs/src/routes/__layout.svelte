<script lang="ts">
	import { theme } from '@svelteuidev/core';
	import { browser } from '$app/env';
	import Navbar from '$lib/PageComponents/Navbar.svelte';
	import '../app.css';

	if (browser && document.documentElement.classList.contains('dark')) {
		$theme.colorScheme = 'dark';
	}
</script>

<div>
	<Navbar />
	<div id="page" class="mt-20 mb-40">
		<slot />
	</div>
</div>
