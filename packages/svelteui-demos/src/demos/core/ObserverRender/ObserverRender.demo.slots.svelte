<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { ObserverRender } from '@svelteuidev/core';
<\/script>

<ObserverRender>
	{#snippet children({ entry, node, observer, scrollDirection, visible })}
		<Stack>
			<div>entry: {JSON.stringify(entry)}</div>
			<div>node: {JSON.stringify(node)}</div>
			<div>observer: {JSON.stringify(observer)}</div>
			<div>scrollDirection: {JSON.stringify(scrollDirection)}</div>
			<div>visible: {visible}</div>
		</Stack>
	{/snippet}
</ObserverRender>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { ObserverRender, Stack } from '@svelteuidev/core';
</script>

<ObserverRender>
	{#snippet children({ entry, node, observer, scrollDirection, visible })}
		<Stack>
			<div>entry: {JSON.stringify(entry)}</div>
			<div>node: {JSON.stringify(node)}</div>
			<div>observer: {JSON.stringify(observer)}</div>
			<div>scrollDirection: {JSON.stringify(scrollDirection)}</div>
			<div>visible: {visible}</div>
		</Stack>
	{/snippet}
</ObserverRender>
