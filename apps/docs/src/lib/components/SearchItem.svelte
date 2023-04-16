<script lang="ts">
	import { goto } from '$app/navigation';
	import { Group } from '@svelteuidev/core';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function addSearchLink() {
		dispatch('addSearch');
	}

	type SearchType = {
		title: String;
		link: String;
		section?: String;
	};
	export let search: SearchType;
</script>

<button
	class="searchTerm"
	on:click={() => {
		addSearchLink();
		goto(search.link.toString());
	}}
>
	<Group position="apart">
		<div style="color: black">
			<p class="searchItemTitle">{search.title}</p>
			<p class="searchItemDescription">{search.section}</p>
		</div>
		<Group position="center" direction="column" override={{ color: '#f5f5f5' }}>
			<p class="searchLink">{search.link}</p>
		</Group>
	</Group>
</button>
