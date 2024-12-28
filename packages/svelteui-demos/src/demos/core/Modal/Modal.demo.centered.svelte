<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Modal } from '@svelteuidev/core';
<\/script>

<Modal centered /* other props */>
	<!-- Modal Content -->
</Modal>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import ModalForm from './ModalForm.svelte';
</script>

<ModalForm centered />
