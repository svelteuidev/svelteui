<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { CloseButton } from '@svelteuidev/core';
<\/script>

<CloseButton aria-label="Close modal" />
<CloseButton size="xl" iconSize={20} />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		toggle: true
	};
</script>

<script lang="ts">
	import { CloseButton, Group } from '@svelteuidev/core';
</script>

<Group position="center">
	<CloseButton aria-label="Close modal" />
	<CloseButton size="xl" iconSize="xl" />
</Group>
