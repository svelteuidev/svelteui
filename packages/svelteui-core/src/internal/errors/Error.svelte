<script lang="ts">
	import { exception } from './index';
	import type { CurrentComponents, ErrorCtx } from './types';

	interface Props {
		observable?: boolean;
		component: CurrentComponents;
		code: ErrorCtx;
	}

	let { observable = false, component, code }: Props = $props();
</script>

{#if observable}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html exception(component, code)}
{/if}
