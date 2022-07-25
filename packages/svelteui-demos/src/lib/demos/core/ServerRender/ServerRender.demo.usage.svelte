<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { ServerRender } from '@svelteuidev/core';
<\/script>

<ServerRender>
    This will only function in a SSR environment.
</ServerRender>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { ServerRender, Text } from '@svelteuidev/core';
</script>

<ServerRender>This will only function in a SSR environment.</ServerRender>
<Text>There is server rendered code above, but you can't see it 😝</Text>
