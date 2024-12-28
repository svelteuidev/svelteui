<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		toggle: true
	};
</script>

<script>
	import { Button, Group } from '@svelteuidev/core';
	import ModalForm from './ModalForm.svelte';

	let size = $state();
	let opened = $state();

	const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 322, '70%'];

	let _size = $derived(size);
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
