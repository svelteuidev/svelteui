<script lang="ts">
	import { goto } from '$app/navigation';
	import { Group, Paper } from '@svelteuidev/core';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function addSearchLink() {
		dispatch('addSearch');
	}

	type SearchType = {
		title: string;
		link: string;
		section?: string;
	};
	interface Props {
		search: SearchType;
	}

	let { search }: Props = $props();
</script>

<button
	class="searchTerm"
	onclick={() => {
		addSearchLink();
		goto(search.link.toString());
	}}
>
	<Paper override={{ root: { bc: 'red !important' } }}>
		<Group position="apart">
			<div>
				<p class="searchItemTitle">{search.title}</p>
				<p class="searchItemDescription">{search.section}</p>
			</div>
			<Group position="center" direction="column">
				<p class="searchLink">{search.link}</p>
			</Group>
		</Group>
	</Paper>
</button>
