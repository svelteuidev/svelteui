<script lang="ts">
	interface Props {
		result?: import('svelte').Snippet;
		code?: import('svelte').Snippet;
	}

	let { result, code }: Props = $props();
</script>

<div class="example">
	<div class="result">
		{@render result?.()}
	</div>
	<div class="code">
		{@render code?.()}
	</div>
</div>
