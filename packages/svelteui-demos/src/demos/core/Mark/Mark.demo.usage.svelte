<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Text, Mark } from '@svelteuidev/core';
<\/script>

<Text>A bunch of text with a <Mark>highlighted bit</Mark> in it.</Text>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Text, Mark } from '@svelteuidev/core';
</script>

<Text>A bunch of text with a <Mark>highlighted bit</Mark> in it.</Text>
