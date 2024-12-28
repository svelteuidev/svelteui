<script lang="ts">
	import { fly } from 'svelte/transition';
	interface Props {
		refresh: string;
		children?: import('svelte').Snippet;
	}

	let { refresh, children }: Props = $props();
</script>

{#key refresh}
	<div in:fly|global={{ x: -5, duration: 300, delay: 300 }} out:fly|global={{ x: 5, duration: 300 }}>
		{@render children?.()}
	</div>
{/key}
