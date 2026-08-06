<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { useHash } from '@svelteuidev/composables';

	const id = useHash('sveleteui');
<\/script>

<p>Generated hash: {id}</p>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Group } from '@svelteuidev/core';
	import { useHash } from '@svelteuidev/composables';

	const id = useHash('sveleteui');
</script>

<Group position="center">
	<p>Generated hash: <b>{id}</b></p>
</Group>
