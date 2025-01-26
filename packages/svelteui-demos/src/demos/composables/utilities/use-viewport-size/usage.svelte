<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Text } from '@svelteuidev/core';
	import { useViewportSize } from '@svelteuidev/composables';

	const viewport = useViewportSize();
	let { width, height } = $derived(viewport);
<\/script>

<Text>Width: {width}, Height: {height}</Text>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Text } from '@svelteuidev/core';
	import { useViewportSize } from '@svelteuidev/composables';

	const viewport = useViewportSize();
	let { width, height } = $derived($viewport);
</script>

<Text align="center">Width: {width}, Height: {height}</Text>
