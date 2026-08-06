<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { tableave } from '@svelteuidev/composables';

    let count = $state(0);
<\/script>

<div use:tableave={() => count++}>Switch the tab to see the counter go up: {count}</div>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Center } from '@svelteuidev/core';
	import { tableave } from '@svelteuidev/composables';

	let count = $state(0);
	
</script>

<Center>
	<div use:tableave={() => count++}>
		Switch the tab to see the counter go up: {count}
	</div>
</Center>
