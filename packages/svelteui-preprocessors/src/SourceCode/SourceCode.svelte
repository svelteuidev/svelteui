<script lang="ts">
	interface Props {
		sourceId: string;
		children?: import('svelte').Snippet;
	}

	let { sourceId, children }: Props = $props();

	if (!sourceId) {
		throw new Error('sourceId is required');
	}
</script>

{@render children?.()}
