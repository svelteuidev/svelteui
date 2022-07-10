<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { useId } from '@svelteuidev/composables';

	const uuid = useId()
<\/script>
	
<p>Generated Id: <b>{uuid}</b></p>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Group } from '@svelteuidev/core';
	import { useId } from '@svelteuidev/composables';

	const uuid = useId();
</script>

<Group position="center">
	<p>Generated Id: <b>{uuid}</b></p>
</Group>
