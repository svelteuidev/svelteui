<script lang="ts" context="module">
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
		.map((_, index) => 'Svelte is a complier');
</script>

<script>
	import { Modal, Group, Button } from '@svelteuidev/core';

	let insideOpened = false;
	let outsideOpened = false;

	const closeInside = () => (insideOpened = false);
	const closeOutside = () => (outsideOpened = false);
	const openInside = () => (insideOpened = true);
	const openOutside = () => (outsideOpened = true);
</script>

<Modal
	opened={outsideOpened}
	on:close={closeOutside}
	title="Please consider this"
	overflow="outside"
  target="body"
>
	{#each content as _}
		<p>{_}</p>
	{/each}
</Modal>

<Modal opened={insideOpened} on:close={closeInside} title="Please consider this" overflow="inside" target="body">
	{#each content as _}
		<p>{_}</p>
	{/each}
</Modal>

<Group position="center">
	<Button on:click={openOutside} color="pink">Outside overflow</Button>
	<Button on:click={openInside} color="cyan">Inside overflow</Button>
</Group>
