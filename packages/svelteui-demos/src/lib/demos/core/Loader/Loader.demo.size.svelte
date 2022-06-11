<script lang='ts' context='module'>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code =
`<script>
    import { Loader } from '@svelteuidev/core';
<\/script>

<Loader size='lg' />
<Loader size={50} />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang='ts'>
	import { Group, Loader } from '@svelteuidev/core';
</script>

<Group position='center'>
    <Loader size='lg' />
    <Loader size={50} />
</Group>