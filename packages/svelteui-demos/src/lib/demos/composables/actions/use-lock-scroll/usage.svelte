<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { lockscroll } from '@svelteuidev/composables';
	import { Button, Group } from '@svelteuidev/core';
	import { LockClosed, LockOpen2 } from 'radix-icons-svelte';

	let scrollLocked = false;
<\/script>

<Group position="center" use={[[lockscroll, scrollLocked]]}>
	<Button on:click={() => (scrollLocked = !scrollLocked)} variant="outline">
		<svelte:component this={scrollLocked ? LockClosed : LockOpen2} slot="leftIcon" />
		{scrollLocked ? 'Unlock scroll' : 'Lock scroll'}
	</Button>
</Group>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { lockscroll } from '@svelteuidev/composables';
	import { Button, Group } from '@svelteuidev/core';
	import { LockClosed, LockOpen2 } from 'radix-icons-svelte';

	let scrollLocked = false;
</script>

<Group position="center" use={[[lockscroll, scrollLocked]]}>
	<Button on:click={() => (scrollLocked = !scrollLocked)} variant="outline">
		<svelte:component this={scrollLocked ? LockClosed : LockOpen2} slot="leftIcon" />
		{scrollLocked ? 'Unlock scroll' : 'Lock scroll'}
	</Button>
</Group>
