<script lang="ts">
	import type { DemoControlSegmented } from '$lib/types';
	import { NativeSelect } from '@svelteuidev/core';
	import { upperFirst } from '$lib/utils';

	export let value: string;
	export let label: DemoControlSegmented['label'];
	export let data: DemoControlSegmented['data'];
	export let capitalize: DemoControlSegmented['capitalize'] = true;
</script>

<!-- TODO: change NativeSelect to Segmented when it will be implemented -->
<NativeSelect
	{value}
	{label}
	data={data.map((item) => ({
		value: item.value,
		label: capitalize ? upperFirst(item.label) : item.label
	}))}
	on:change
/>
