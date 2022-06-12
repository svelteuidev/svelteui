<script lang='ts' context='module'>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code =
`<script>
    import { Loader } from '@svelteuidev/core';
<\/script>

<Loader color='red' />
<Loader color='green' />
<Loader color='teal' />
<Loader color='gray' />
<Loader color='blue' />
<Loader color='yellow' />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang='ts'>
	import { Group, Loader } from '@svelteuidev/core';
</script>

<Group position='center'>
	<Loader color='red' />
	<Loader color='green' />
	<Loader color='teal' />
	<Loader color='gray' />
	<Loader color='blue' />
	<Loader color='yellow' />
</Group>