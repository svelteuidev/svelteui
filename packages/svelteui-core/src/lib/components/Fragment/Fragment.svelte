<script lang="ts">
	export let className: string = '';
	export { className as class };
</script>

<slot class={className} {...$$restProps} />
