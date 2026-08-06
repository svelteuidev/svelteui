<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Title } from '@svelteuidev/core';
<\/script>


<Title order={1}>This is h1 title</Title>
<Title order={1} variant='gradient' gradient={{from: 'blue', to: 'red', deg: 45}}>This is h1 title with a twist</Title>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Title } from '@svelteuidev/core';
</script>

<Title order={1}>This is h1 title</Title>
<Title order={1} variant="gradient" gradient={{ from: 'blue', to: 'red', deg: 45 }}
	>This is h1 title with a twist</Title
>
