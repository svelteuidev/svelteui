<script lang='ts' context='module'>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code =
`<script>
    import { Loader } from '@svelteuidev/core';
<\/script>

<Loader />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang='ts'>
	import { Center, Loader } from '@svelteuidev/core';
</script>

<Center>
	<Loader />
</Center>