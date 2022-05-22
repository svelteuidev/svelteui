<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
    <script>
        import { hash } from '@svelteuidev/utilities'

        const id = hash('sveleteui')
    <\/script>

    <p>Generated hash: {id}</p>
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Group } from '@svelteuidev/core';
	import { hash } from '@svelteuidev/utilities';

	const id = hash('sveleteui');
</script>

<Group position="center">
	<p>Generated hash: <b>{id}</b></p>
</Group>
