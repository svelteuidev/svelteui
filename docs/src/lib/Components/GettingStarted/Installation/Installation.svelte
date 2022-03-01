<script lang="ts">
	import { PACKAGE_DATA } from './data';
	import PackageCard from './PackageCard.svelte';
</script>

<div>
	<h1 class="text-2xl sm:text-4xl">Choose your packages</h1>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
		{#each PACKAGE_DATA as card}
			<PackageCard title={card.package} description={card.description} />
		{/each}
	</div>
</div>
