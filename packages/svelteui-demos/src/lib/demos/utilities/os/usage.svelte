<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
    <script>
        import { os as _os } from '@svelteuidev/utilities';
        const os = _os();
    <\/script>

    <p>Your OS is <b>{os}</b></p>
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Box } from '@svelteuidev/core';
	import { os as _os } from '@svelteuidev/utilities';
	const os = _os();
</script>

<Box css={{ d: 'flex', jc: 'center' }}>
	<p>Your OS is <b>{os}</b></p>
</Box>
