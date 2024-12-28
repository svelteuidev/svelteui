<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Group, Text, Code } from '@svelteuidev/core';
	import { useMousePosition } from '@svelteuidev/composables';

	const [position, ref] = useMousePosition();
	$: ({ x, y } = $position);
<\/script>

<div>
	<Group position="center">
		<div use:ref style="width: 300px; height: 100px; background-color: #f1f3f5;" />
	</Group>
	<Text align="center">
		Mouse coordinates <Code>{\`{ x: $\{x}, y: $\{y} }\`}</Code>
	</Text>
</div>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Group, Text, Code } from '@svelteuidev/core';
	import { useMousePosition } from '@svelteuidev/composables';

	const [position, ref] = useMousePosition();
	let { x, y } = $derived($position);
</script>

<div>
	<Group position="center">
		<div use:ref style="width: 300px; height: 100px; background-color: #f1f3f5;"></div>
	</Group>
	<Text align="center">
		Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
	</Text>
</div>
