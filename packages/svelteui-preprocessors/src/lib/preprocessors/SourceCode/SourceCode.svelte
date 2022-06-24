<script lang="ts">
	export let sourceId: string;

	if (!sourceId) {
		throw new Error('sourceId is required');
	}
</script>

<slot />
