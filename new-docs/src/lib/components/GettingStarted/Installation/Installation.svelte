<script lang="ts">
	import { css } from '@svelteuidev/core';
	import { PACKAGE_DATA, deps } from './data';
	import PackageCard from './PackageCard.svelte';

	let dependencies;

	$: getDependencys = (i: number) => {
		dependencies = $PACKAGE_DATA[i].dependencies;
		dependencies = dependencies;
		deps.set(dependencies);
	};

	const InstallationGridStyles = css({
		h1: {
			fontSize: '1.5rem',
			lineHeight: '2rem',
			'@sm': {
				fontSize: '2.25rem',
				lineHeight: '2.5rem'
			}
		},
		'& .container': {
			display: 'grid',
			gap: '1rem',
			gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
			'@sm': {
				gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
			}
		}
	});
</script>

<div class={InstallationGridStyles()}>
	<h1 class="">Choose your packages</h1>
	<div class="container">
		{#each $PACKAGE_DATA as card, i (card.id)}
			<PackageCard
				on:click={() => getDependencys(i)}
				title={card.package}
				description={card.description}
			/>
		{/each}
	</div>
</div>
