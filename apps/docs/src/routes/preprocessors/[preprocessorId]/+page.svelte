<script lang="ts">
	import type { PageData } from './$types';
	import { Heading } from '$lib/components';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title} - SvelteUI</title>
</svelte:head>

<Heading {...data} />
<svelte:component this={data.content} />
