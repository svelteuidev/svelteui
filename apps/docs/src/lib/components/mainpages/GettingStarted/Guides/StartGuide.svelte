<script>
	import { SimpleGrid, Box } from '@svelteuidev/core';
	import { STARTGUIDE_DATA } from './data.js';
	import Guides from './Guides.svelte';

	export let setId;

	/** Variable for switching cards stitches variant*/
	$: selected = 'kit';
	$: setId(selected);
</script>

<Box css={{ mb: 50 }}>
	<SimpleGrid
		cols={3}
		breakpoints={[
			{ maxWidth: 800, cols: 1 },
			{ maxWidth: 1120, cols: 2 }
		]}
	>
		{#each STARTGUIDE_DATA as { title, id, icon } (id)}
			<Guides on:click={() => (selected = id)} {title} {icon} active={selected === id} />
		{/each}
	</SimpleGrid>
</Box>
