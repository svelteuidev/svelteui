<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
    <script>
        import { useHash } from '@svelteuidev/composables';

		const id = useHash('sveleteui');
    <\/script>

    <p>Generated hash: {id}</p>
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { lazy } from '@svelteuidev/composables';
</script>

<div>Demo Here</div>
