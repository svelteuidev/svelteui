<script>
	import { Sibling } from '@ui';
	import { Group, Divider } from '@svelteuidev/core';

	export let slug,
		title,
		group,
		both = false,
		type = 'next';

	const data = { slug, title, package: group };
	let dataLeft, dataRight;

	$: isObj = typeof slug === 'object' && typeof title === 'object' && typeof group === 'object';

	$: if (isObj && both) {
		dataLeft = { slug: slug.prev, title: title.prev, package: group.prev };
		dataRight = { slug: slug.next, title: title.next, package: group.next };
	}
</script>

<Divider />
<Group position={both ? 'apart' : type === 'prev' ? 'left' : 'right'} grow={!!both} noWrap>
	{#if both}
		<Sibling data={dataLeft || data} type="prev" />
		<Sibling data={dataRight || data} />
	{:else if type === 'prev'}
		<Sibling {data} {type} />
	{:else}
		<Sibling {data} />
	{/if}
</Group>
