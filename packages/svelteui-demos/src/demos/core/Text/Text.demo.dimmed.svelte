<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Text } from '@svelteuidev/core';
<\/script>

<Text color='dimmed'>Dimmed text</Text>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Center, Text } from '@svelteuidev/core';
</script>

<Center>
	<Text color="dimmed">Dimmed text</Text>
</Center>
