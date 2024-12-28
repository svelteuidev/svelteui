<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Portal } from '../../Portal';

	interface Props {
		withinPortal?: boolean;
		target?: string;
		children?: Snippet<[{ ref?: string }]>;
	}

	let { withinPortal = false, target = 'body', children }: Props = $props();
</script>

{#if withinPortal}
	<Portal {target}>
		{@render children?.({ ref: target })}
	</Portal>
{:else}
	{@render children?.({})}
{/if}
