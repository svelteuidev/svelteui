<script lang="ts">
	import type { DemoControlSelect } from '$lib/types';
	import { NativeSelect } from '@svelteuidev/core';
	import { upperFirst } from '$lib/utils';

	interface Props {
		value: string;
		label: DemoControlSelect['label'];
		data: DemoControlSelect['data'];
		capitalize?: DemoControlSelect['capitalize'];
		onchange: (value: string) => void;
	}

	let { value, label, data, capitalize = true, onchange }: Props = $props();
</script>

<NativeSelect
	{value}
	{label}
	data={data.map((item) => ({
		value: item.value,
		label: capitalize ? upperFirst(item.label) : item.label
	}))}
	{onchange}
/>
