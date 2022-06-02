<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { TextInput } from '@svelteuidev/core';
<\/script>

<TextInput disabled label='Disabled without value' placeholder='Your email' />
<TextInput disabled label='Disabled with value' value='you@email.com' />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Stack, TextInput } from '@svelteuidev/core';
</script>

<Center>
    <Stack position="center">
        <TextInput disabled label='Disabled without value' placeholder='Your email' />
        <TextInput disabled label='Disabled with value' value='you@email.com' />
    </Stack>
</Center>
