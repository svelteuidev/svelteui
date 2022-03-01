<script lang="ts">
	import { STARTGUIDE_DATA } from './data';
	import Guides from './Guides.svelte';

	const items = [1, 2, 3, 4];
</script>

<Guides />

<div>
	<h1 class="text-2xl sm:text-4xl">Get started with</h1>
	<div class="grid grid-cols-1 md:grid-cols-2">
		{#each items as item}
			<p>{item}</p>
		{/each}
	</div>
</div>
