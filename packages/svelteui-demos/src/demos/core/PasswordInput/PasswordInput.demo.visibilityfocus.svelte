<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { PasswordInput } from '@svelteuidev/core';
<\/script>

<PasswordInput label="Unfocusable toggle"  />
<PasswordInput label="Focusable toggle" toggleTabIndex={0} />
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
		<PasswordInput label="Unfocusable toggle" />
		<PasswordInput label="Focusable toggle" toggleTabIndex={0} />
	</Stack>
</Center>
