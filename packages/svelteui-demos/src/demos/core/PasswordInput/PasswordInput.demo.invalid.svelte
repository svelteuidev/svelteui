<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { PasswordInput } from '@svelteuidev/core';
<\/script>

<PasswordInput error label='Password' value='blahblah' \/>
<PasswordInput error='Invalid email' label='Password' value='blahblah' \/>
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
		<PasswordInput error label="Password" value="blahblah" />
		<PasswordInput error="Invalid password" label="Password" value="blahblah" />
	</Stack>
</Center>
