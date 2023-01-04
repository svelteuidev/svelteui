<script lang="ts">
  import { Heading } from '$lib/components';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.title} - SvelteUI</title>
</svelte:head>

<article>
  <Heading {...data} />
  <svelte:component this={data.content} />
</article>
