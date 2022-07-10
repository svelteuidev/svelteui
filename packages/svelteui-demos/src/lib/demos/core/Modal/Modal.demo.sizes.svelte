<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		toggle: true
	};
</script>

<script>
	import { Button, Group } from '@svelteuidev/core';
	import ModalForm from './ModalForm.svelte';

	let size;
	let opened;

	const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 322, '70%'];

	$: _size = size;
</script>

<Group position="center">
	{#each SIZES as s (s)}
		<Button
			variant="outline"
			on:click={() => {
				size = s;
				opened = true;
			}}
		>
			{typeof s === 'number' ? `${s}px` : s}
		</Button>
	{/each}
</Group>

<ModalForm {opened} closeModal={() => (opened = false)} withOpenButton={false} size={_size} />
