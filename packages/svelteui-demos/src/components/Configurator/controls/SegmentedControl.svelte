<script lang="ts">
	import type { DemoControlSegmented } from '$lib/types';
	import { NativeSelect } from '@svelteuidev/core';
	import { upperFirst } from '$lib/utils';

	interface Props {
		value: string;
		label: DemoControlSegmented['label'];
		data: DemoControlSegmented['data'];
		capitalize?: DemoControlSegmented['capitalize'];
		onchange: (value: string) => void;
	}

	let { value, label, data, capitalize = true, onchange }: Props = $props();
</script>

<!-- TODO: change NativeSelect to Segmented when it will be implemented -->
<NativeSelect
	{value}
	{label}
	data={data.map((item) => ({
		value: item.value,
		label: capitalize ? upperFirst(item.label) : item.label
	}))}
	{onchange}
/>
