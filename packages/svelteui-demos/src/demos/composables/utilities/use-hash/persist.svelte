<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { useHash } from '@svelteuidev/composables';

	const id = useHash('my-library', true);
<\/script>

<p>Generated hash that won't change: <b>{id}</b></p>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Stack, Button } from '@svelteuidev/core';
	import { useHash } from '@svelteuidev/composables';

	const id = useHash('my-library', true);
</script>

<Stack align="center">
	<Button onclick={() => window.location.reload()}>Click to refresh the page</Button>
	<p>Generated hash that won't change: <b>{id}</b></p>
</Stack>
