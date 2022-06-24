<script lang="ts">
	export let sourceId: string;
	export let source: string = '';

	if (!sourceId) {
		throw new Error('sourceId is required');
	}
</script>

<slot {source}><pre>{source}</pre></slot>
