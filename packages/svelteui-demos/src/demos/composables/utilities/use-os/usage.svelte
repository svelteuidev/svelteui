<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { useOs } from '@svelteuidev/composables';
	const os = useOs();
<\/script>

<p>Your OS is <b>{os}</b></p>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Box } from '@svelteuidev/core';
	import { useOs } from '@svelteuidev/composables';
	const os = useOs();
</script>

<Box css={{ d: 'flex', jc: 'center' }}>
	<p>Your OS is <b>{os}</b></p>
</Box>
