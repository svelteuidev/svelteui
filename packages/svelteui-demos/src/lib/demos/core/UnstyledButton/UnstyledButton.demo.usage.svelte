<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { UnstyledButton } from '@svelteuidev/core';
<\/script>

<UnstyledButton />
<UnstyledButton root='a' />`;

	export const type: CodeDemoType['type'] = 'demo';
	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Group, UnstyledButton } from '@svelteuidev/core';
</script>

<Center>
	<Group>
		<UnstyledButton>Click here</UnstyledButton>
		<UnstyledButton root="a">Click here</UnstyledButton>
	</Group>
</Center>
