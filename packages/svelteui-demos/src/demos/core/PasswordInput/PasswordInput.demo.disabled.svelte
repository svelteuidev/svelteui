<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { PasswordInput } from '@svelteuidev/core';
<\/script>

<PasswordInput disabled label='Disabled without value' placeholder='Password' />
<PasswordInput disabled label='Disabled with value' value='blahblah' />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Stack, PasswordInput } from '@svelteuidev/core';
</script>

<Center>
	<Stack position="center">
		<PasswordInput disabled label="Disabled without value" placeholder="Password" />
		<PasswordInput disabled label="Disabled with value" value="blahblah" />
	</Stack>
</Center>
