<script lang="ts">
	import type { DemoControlSelect } from '$lib/types';
	import { NativeSelect } from '@svelteuidev/core';
	import { upperFirst } from '$lib/utils';

	export let value: string;
	export let label: DemoControlSelect['label'];
	export let data: DemoControlSelect['data'];
	export let capitalize: DemoControlSelect['capitalize'] = true;
</script>

<NativeSelect
	{value}
	{label}
	data={data.map((item) => ({
		value: item.value,
		label: capitalize ? upperFirst(item.label) : item.label
	}))}
	on:change
/>
