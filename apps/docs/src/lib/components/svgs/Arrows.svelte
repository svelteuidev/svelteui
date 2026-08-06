<script lang="ts">
	import { ChevronRight, ChevronDown } from 'radix-icons-svelte';

	interface Props {
		open?: boolean;
	}

	let { open = false }: Props = $props();
</script>

{#if open}
	<ChevronDown />
{:else}
	<ChevronRight />
{/if}
