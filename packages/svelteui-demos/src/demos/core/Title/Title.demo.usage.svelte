<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Title } from '@svelteuidev/core';
<\/script>

<Title order={1}>This is h1 title</Title>
<Title order={2}>This is h2 title</Title>
<Title order={3}>This is h3 title</Title>
<Title order={4}>This is h4 title</Title>
<Title order={5}>This is h5 title</Title>
<Title order={6}>This is h6 title</Title>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Title } from '@svelteuidev/core';
</script>

<Title order={1}>This is h1 title</Title>
<Title order={2}>This is h2 title</Title>
<Title order={3}>This is h3 title</Title>
<Title order={4}>This is h4 title</Title>
<Title order={5}>This is h5 title</Title>
<Title order={6}>This is h6 title</Title>
