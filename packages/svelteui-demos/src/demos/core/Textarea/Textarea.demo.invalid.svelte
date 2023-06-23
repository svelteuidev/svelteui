<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Textarea } from '@svelteuidev/core';
<\/script>

<Textarea error label="Your story" value="Once upon a land" />
<Textarea
  error='Stories must begin with "Once upon a time"'
  label="Your story"
  value="Once upon a land"
/>
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
		<Textarea error label="Your story" value="Once upon a land" />
		<Textarea
			error={`Stories must begin with "Once upon a time"`}
			label="Your story"
			value="Once upon a land"
		/>
	</Stack>
</Center>
