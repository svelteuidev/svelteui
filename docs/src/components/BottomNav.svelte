<script>
	import { Sibling } from '@ui';
	import { Group, Divider, Stack } from '@svelteuidev/core';
	import { useViewportSize } from '@svelteuidev/composables';

	export let slug,
		title,
		group,
		both = false,
		type = 'next';

	const data = { slug, title, package: group };
	const viewport = useViewportSize();
	let dataLeft, dataRight;

	$: isObj = typeof slug === 'object' && typeof title === 'object' && typeof group === 'object';

	$: if (isObj && both) {
		dataLeft = { slug: slug.prev, title: title.prev, package: group.prev };
		dataRight = { slug: slug.next, title: title.next, package: group.next };
	}
	$: ({ width } = $viewport);
</script>

<Divider />
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
