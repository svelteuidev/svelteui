<script>
	import { ChevronRight, ChevronDown } from 'radix-icons-svelte';

	export let open = false;
</script>

{#if open}
	<ChevronDown />
{:else}
	<ChevronRight />
{/if}
