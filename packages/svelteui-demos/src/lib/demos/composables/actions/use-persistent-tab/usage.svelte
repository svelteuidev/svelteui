<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { persistenttab } from '@svelteuidev/composables';

    let isNotClosable = false;
<\/script>

<button on:click={() => isNotClosable = !isNotClosable}>
    {isNotClosable ? "Can't close tab" : 'Can close tab'}
</button>

<div use:persistenttab={isNotClosable}>
    Something important that the user wouldn't want to lose to a page refresh or close
</div>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Stack } from '@svelteuidev/core';
	import { persistenttab } from '@svelteuidev/composables';

	let isNotClosable = false;
</script>

<Stack align="center">
	<button on:click={() => (isNotClosable = !isNotClosable)}>
		{isNotClosable ? "Can't close tab" : 'Can close tab'}
	</button>

	<div use:persistenttab={isNotClosable}>
		Something important that the user wouldn't want to lose to a page refresh or close
	</div>
</Stack>
