<script lang="ts">
	import type { PageData } from './$types';
	import { MinorHeading } from '$lib/components';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title} - SvelteUI</title>
</svelte:head>

<MinorHeading {...data} />
<svelte:component this={data.content} />
