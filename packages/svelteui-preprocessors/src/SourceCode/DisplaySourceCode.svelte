<script lang="ts">
	interface Props {
		sourceId: string;
		source?: string;
		children?: import('svelte').Snippet<[any]>;
	}

	let { sourceId, source = '', children }: Props = $props();

	if (!sourceId) {
		throw new Error('sourceId is required');
	}
</script>

{#if children}{@render children({ source, })}{:else}<pre>{source}</pre>{/if}
