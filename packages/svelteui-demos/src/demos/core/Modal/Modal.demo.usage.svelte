<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Modal, Group, Button } from '@svelteuidev/core';

	let opened = $state(false);
<\/script>

<!-- This component must be wrapped in SvelteUIProvider (on the application level)
  or you must specify a target with the target prop --!>
<Modal {opened} onclose={closeModal} titleText="Introduce yourself!">
	<!-- Modal Content -->
</Modal>

<Group position="center">
	<Button onclick={() => (opened = true)}>Open Modal</Button>
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

<ModalForm opened={false} />
