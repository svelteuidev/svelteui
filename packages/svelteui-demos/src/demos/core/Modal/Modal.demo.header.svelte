<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Modal } from '@svelteuidev/core';
<\/script>

<Modal withCloseButton={false}>
	Modal without header, press escape or click on overlay to close
</Modal>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Modal, Group, Button } from '@svelteuidev/core';

	let opened = $state();
</script>

<Modal {opened} on:close={() => (opened = false)} withCloseButton={false}>
	Modal without header, press escape or click on overlay to close
</Modal>

<Group position="center">
	<Button on:click={() => (opened = true)}>Open Modal</Button>
</Group>
