<script lang="ts">
	import { SimpleGrid, Box } from '@svelteuidev/core';
	import CheckboxCard from './Card.svelte';
	import { PACKAGE_DATA } from './data.js';

	let { setDeps } = $props();

	let values: { [key: string]: boolean } = $state({
		'@svelteuidev/core': true,
		'@svelteuidev/composables': true,
		'@svelteuidev/motion': false,
		'@svelteuidev/prism': false
	});

	$effect(() => {
		const dependencies = Array.from(
			new Set(
				PACKAGE_DATA.reduce((acc, item) => {
					if (values[item.package]) {
						acc.push(...item.dependencies);
					}

					return acc;
				}, [] as string[])
			)
		)
			.sort()
			.reverse()
			.join(' ');
		setDeps(dependencies);
	});
</script>

<Box css={{ mb: 50 }}>
	<SimpleGrid cols={2} breakpoints={[{ maxWidth: 800, cols: 1 }]}>
		{#each PACKAGE_DATA as item}
			<CheckboxCard
				checked={values[item.package]}
				title={item.package}
				description={item.description}
				onChange={() => {
					values = { ...values, [item.package]: !values[item.package] };
				}}
			/>
		{/each}
	</SimpleGrid>
</Box>
