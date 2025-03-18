<script lang="ts">
	import { goto } from '$app/navigation';
	import { Group, Paper } from '@svelteuidev/core';

	export type SearchType = {
		title: string;
		link: string;
		section?: string;
	};

	interface Props {
		search: SearchType;
		onAddSearch: () => void;
	}

	let { search, onAddSearch }: Props = $props();

	function addSearchLink() {
		onAddSearch();
	}
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
