<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { useElementSize } from '@svelteuidev/composables';

	const [elementSize, ref] = useElementSize();

	let { width, height } = $derived(elementSize);
<\/script>

<textarea use:ref style='width: 400px; height: 120;' />
<div>Width: {width}px, height: {height}px</div>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Text, Group, Box } from '@svelteuidev/core';
	import { useElementSize } from '@svelteuidev/composables';

	const [elementSize, ref] = useElementSize();

	let { width, height } = $derived($elementSize);
</script>

<Text align="center" size="sm" mb="xs">Resize textarea by dragging its right bottom corner</Text>

<Group position="center">
	<Box
		root="textarea"
		use={[[ref]]}
		css={{
			width: 400,
			height: 120,
			border: 'none',
			backgroundColor: '$gray200',
			position: 'relative'
		}}
	/>
</Group>
<Text align="center" mt="sm">
	Width: {width}px, height: {height}px
</Text>
