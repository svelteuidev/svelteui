<script>export let sourceId;
export let source = '';
if (!sourceId) {
    throw new Error('sourceId is required');
}
</script>

<slot {source}><pre>{source}</pre></slot>
