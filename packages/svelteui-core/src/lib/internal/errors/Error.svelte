<script lang="ts">
	import { exception } from './index';
	import type { CurrentComponents, ErrorCtx } from './types';

	export let observable = false;
	export let component: CurrentComponents;
	export let code: ErrorCtx;
</script>

{#if observable}
	{@html exception(component, code)}
{/if}
