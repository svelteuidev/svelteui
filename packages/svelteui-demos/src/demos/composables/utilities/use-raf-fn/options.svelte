<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Button } from '@svelteuidev/core';
	import { useRafFn } from '@svelteuidev/composables';

	let count = $state(0);
	const { pause, resume } = useRafFn(() => count++, {immediate: false});
<\/script>

<div>Count: {count}</div>
<Button onclick={() => pause()}>Pause</Button>
<Button onclick={() => resume()}>Resume</Button>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Button, Group } from '@svelteuidev/core';
	import { useRafFn } from '@svelteuidev/composables';

	let count = $state(0);
	const { pause, resume } = useRafFn(() => count++, { immediate: false });
</script>

<Group position="center">
	<div>Count: {count}</div>
	<Button onclick={() => pause()}>Pause</Button>
	<Button onclick={() => resume()}>Resume</Button>
</Group>
