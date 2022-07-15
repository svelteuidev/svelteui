<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
    import { Modal, useSvelteUITheme } from '@svelteuidev/core';
    
    const theme = useSvelteUITheme();
<\/script>
    
<Modal
    overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
    overlayOpacity={0.55}
    overlayBlur={3}
>
    {/* Modal content */}
</Modal>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { useSvelteUITheme } from '@svelteuidev/core';
	import ModalForm from './ModalForm.svelte';

	const theme = useSvelteUITheme();
</script>

<ModalForm overlayColor={theme.colors.gray200.value} overlayOpacity={0.55} overlayBlur={3} />
