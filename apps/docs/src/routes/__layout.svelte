<script lang="ts">
	import { theme } from '@svelteuidev/core/package';
	import Navbar from '$components/Navbar.svelte';
	import '../app.css';
	import { browser } from '$app/env';

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
