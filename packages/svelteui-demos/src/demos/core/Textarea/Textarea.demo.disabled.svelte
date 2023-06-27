<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Textarea } from '@svelteuidev/core';
<\/script>

<Textarea disabled label="Disabled without value" placeholder="Once upon a time" />
<Textarea disabled label="Disabled with value" value="Once upon a time in a far away kingdom" />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Stack, Textarea } from '@svelteuidev/core';
</script>

<Center>
	<Stack justify="center">
		<Textarea disabled label="Disabled without value" placeholder="Once upon a time" />
		<Textarea disabled label="Disabled with value" value="Once upon a time in a far away kingdom" />
	</Stack>
</Center>
