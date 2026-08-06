<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Loader } from '@svelteuidev/core';
<\/script>

<Loader variant='circle' />
<Loader variant='dots' />
<Loader variant='bars' />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Group, Loader } from '@svelteuidev/core';
</script>

<Group position="center">
	<Loader variant="circle" />
	<Loader variant="dots" />
	<Loader variant="bars" />
</Group>
