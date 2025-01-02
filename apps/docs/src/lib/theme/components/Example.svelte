<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		result?: Snippet;
		code?: Snippet;
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
