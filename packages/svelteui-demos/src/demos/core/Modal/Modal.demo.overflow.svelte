<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
// (default) - overflow is handled by modal wrapper
<Modal overflow="outside" />

// overflow is handled by modal body
<Modal overflow="inside" />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};

	const content = Array(100)
		.fill(0)
		.map(() => 'Svelte is a complier');
</script>

<script>
	import { Modal, Group, Button } from '@svelteuidev/core';

	let insideOpened = $state(false);
	let outsideOpened = $state(false);

	const closeInside = () => (insideOpened = false);
	const closeOutside = () => (outsideOpened = false);
	const openInside = () => (insideOpened = true);
	const openOutside = () => (outsideOpened = true);
</script>

<Modal
	opened={outsideOpened}
	onclose={closeOutside}
	titleText="Please consider this"
	overflow="outside"
>
	{#each content as _}
		<p>{_}</p>
	{/each}
</Modal>

<Modal
	opened={insideOpened}
	onclose={closeInside}
	titleText="Please consider this"
	overflow="inside"
>
	{#each content as _}
		<p>{_}</p>
	{/each}
</Modal>

<Group position="center">
	<Button onclick={openOutside} color="pink">Outside overflow</Button>
	<Button onclick={openInside} color="cyan">Inside overflow</Button>
</Group>
