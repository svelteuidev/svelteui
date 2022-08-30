<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Text, Code } from '@svelteuidev/core';
	import { useMousePosition } from '@svelteuidev/composables';

	const [position, ref] = useMousePosition(true);
	$: ({ x, y } = $position);
<\/script>

<Text use={[[ref]]} align="center">
	Mouse coordinates <Code>{\`{ x: $\{x}, y: $\{y} }\`}</Code>
</Text>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Text, Code } from '@svelteuidev/core';
	import { useMousePosition } from '@svelteuidev/composables';

	const [position, ref] = useMousePosition(true);
	$: ({ x, y } = $position);
</script>

<Text use={[[ref]]} align="center">
	Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
</Text>
