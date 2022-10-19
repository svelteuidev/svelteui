<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Center, Text, Title } from '@svelteuidev/core';
<\/script>

<Title order={3}>
    Highlight{' '}
    <Text color="blue" inherit component="span">
        something
    </Text>
    in title
</Title>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Center, Text, Title } from '@svelteuidev/core';
</script>

<Center>
	<Title order={3}>
		Highlight{' '}
		<Text color="blue" inherit root="span">something</Text>
		in title
	</Title>
</Center>
