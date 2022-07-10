<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { MediaQuery, Text } from '@svelteuidev/core';
<\/script>

<MediaQuery
	query="(max-width: 1200px) and (min-width: 800px)"
	styles={{ bc: '$blue50', p: '$10' }}
>
	<Text>(max-width: 1200px) and (min-width: 800px) breakpoints</Text>
</MediaQuery>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { MediaQuery, Text } from '@svelteuidev/core';
</script>

<MediaQuery query="(max-width: 1200px) and (min-width: 800px)" styles={{ bc: '$blue50', p: '$10' }}>
	<Text>(max-width: 1200px) and (min-width: 800px) breakpoints</Text>
</MediaQuery>
