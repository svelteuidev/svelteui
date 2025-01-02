<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		codeVisible: true
	};
</script>

<script>
	import { Button, Group, type LiteralUnion, type SvelteUISize } from '@svelteuidev/core';
	import ModalForm from './ModalForm.svelte';

	let size: LiteralUnion<SvelteUISize, number | string> = $state();
	let opened = $state(false);

	const SIZES: LiteralUnion<SvelteUISize, number | string>[] = [
		'xs',
		'sm',
		'md',
		'lg',
		'xl',
		'full',
		322,
		'70%'
	];
</script>

<Group position="center">
	{#each SIZES as s}
		<Button
			variant="outline"
			onclick={() => {
				size = s;
				opened = true;
			}}
		>
			{typeof s === 'number' ? `${s}px` : s}
		</Button>
	{/each}
</Group>

<ModalForm {opened} closeModal={() => (opened = false)} withOpenButton={false} {size} />
