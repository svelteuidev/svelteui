<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { TextInput } from '@svelteuidev/core';
<\/script>

<TextInput error label='Your email' value='you@email.com' \/>
<TextInput error='Invalid email' label='Your email' value='you@email.com' \/>
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
		<TextInput error label="Your email" value="you@email.com" />
		<TextInput error="Invalid email" label="Your email" value="you@email.com" />
	</Stack>
</Center>
