<script>
	import { SimpleGrid, Box } from '@svelteuidev/core';
	import { STARTGUIDE_DATA } from './data';
	import Guides from './Guides.svelte';

	export let setId;

	/** Variable for switching cards stitches variant*/
	const active = { state: 'active' };
	$: selected = 'svelte';
	$: setId(selected);
</script>

<Box css={{ mb: 50 }}>
	<SimpleGrid cols={2} breakpoints={[{ maxWidth: 800, cols: 1 }]}>
		{#each STARTGUIDE_DATA as { title, id, icon } (id)}
			<Guides
				on:click={() => (selected = id)}
				{title}
				{icon}
				active={selected === id ? active : {}}
			/>
		{/each}
	</SimpleGrid>
</Box>
