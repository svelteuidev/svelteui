<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { pageleave } from '@svelteuidev/composables';

    $: count = 0;
<\/script>

<div use:pageleave={() => count++}>Move the mouse off the page to see the counter go up: {count}</div>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Center } from '@svelteuidev/core';
	import { pageleave } from '@svelteuidev/composables';

	let count = $state(0);
	
</script>

<Center>
	<div use:pageleave={() => count++}>
		Move the mouse off the page to see the counter go up: {count}
	</div>
</Center>
