<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Modal, Group, Button } from '@svelteuidev/core';

	let opened = false;
<\/script>

<Modal {opened} onClose={closeModal} title="Introduce yourself!">
	<!-- Modal Content -->
</Modal>

<Group position="center">
	<Button on:click={() => (opened = true)}>Open Modal</Button>
</Group>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import ModalForm from './ModalForm.svelte';
</script>

<ModalForm />
