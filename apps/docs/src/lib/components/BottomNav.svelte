<script lang="ts">
	import { run } from 'svelte/legacy';

	import { Sibling } from '@ui';
	import { Group, Divider, Stack } from '@svelteuidev/core';
	import { useViewportSize } from '@svelteuidev/composables';

	type DataType = {
		prev: string;
		next: string;
	};

	interface Props {
		slug: DataType;
		title: DataType;
		group: DataType;
		both?: boolean;
		type?: string;
	}

	let { slug, title, group, both = false, type = 'next' }: Props = $props();

	const data = { slug, title, package: group };
	const viewport = useViewportSize();
	let dataLeft = $state(),
		dataRight = $state();

	let isObj = $derived(
		typeof slug === 'object' && typeof title === 'object' && typeof group === 'object'
	);

	run(() => {
		if (isObj && both) {
			dataLeft = { slug: slug.prev, title: title.prev, package: group.prev };
			dataRight = { slug: slug.next, title: title.next, package: group.next };
		}
	});
	let { width } = $derived($viewport);
</script>

<Divider size="lg" override={{ mt: '$20 !important' }} />
{#if both && width <= 950}
	<Stack>
		<Sibling data={dataLeft || data} type="prev" />
		<Sibling data={dataRight || data} />
	</Stack>
{:else}
	<Group noWrap grow={!!both} position={both ? 'apart' : type === 'prev' ? 'left' : 'right'}>
		{#if both}
			<Sibling data={dataLeft || data} type="prev" />
			<Sibling data={dataRight || data} />
		{:else if type === 'prev'}
			<Sibling {data} {type} />
		{:else}
			<Sibling {data} />
		{/if}
	</Group>
{/if}
