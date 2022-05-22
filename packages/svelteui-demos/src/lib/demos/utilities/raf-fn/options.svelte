<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
    <script>
        import { rafFn } from '@svelteuidev/utilities';
        import { Button } from '@svelteuidev/core';

        let count = 0;
        const { pause, resume } = rafFn(() => count++, {immediate: false});
    <\/script>

    <div>Count: {count}</div>
    <Button on:click={() => pause()}>Pause</Button>
    <Button on:click={() => resume()}>Resume</Button>
    
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { rafFn } from '@svelteuidev/utilities';
	import { Button, Group } from '@svelteuidev/core';

	let count = 0;
	const { pause, resume } = rafFn(() => count++, { immediate: false });
</script>

<Group position="center">
	<div>Count: {count}</div>
	<Button on:click={() => pause()}>Pause</Button>
	<Button on:click={() => resume()}>Resume</Button>
</Group>
