<script lang="ts">
	import type { DemoControlProps } from '$lib/types';
	import { NativeSelect } from '@svelteuidev/core';
	import { upperFirst } from '$lib/utils';

	export let value: string;
	export let label: DemoControlProps['label'];
	export let data: DemoControlProps['data'];
	export let capitalize: DemoControlProps['capitalize'] = true;
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
