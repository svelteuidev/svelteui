<script lang="ts">
	import { Portal } from '../../Portal';

	interface Props {
		withinPortal?: boolean;
		target?: string;
		children?: import('svelte').Snippet<[any]>;
	}

	let { withinPortal = false, target = 'body', children }: Props = $props();
</script>

{#if withinPortal}
	<Portal {target}>
		{@render children?.({ ref: target, })}
	</Portal>
{:else}
	{@render children?.()}
{/if}
