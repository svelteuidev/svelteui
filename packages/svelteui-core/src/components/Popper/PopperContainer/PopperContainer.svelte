<script lang="ts">
	import { Portal } from '../../Portal';

	export let withinPortal: boolean = false;
	export let target: string = 'body';
</script>

{#if withinPortal}
	<Portal {target}>
		<slot ref={target} />
	</Portal>
{:else}
	<slot />
{/if}
