<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
  import { BrowserRender } from '@svelteuidev/core';
<\/script>

<BrowserRender>
    This will only render on the Browser.
</BrowserRender>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		toggle: true
	};
</script>

<script lang="ts">
	import { BrowserRender, Group } from '@svelteuidev/core';
</script>

<Group position="center">
	<BrowserRender>This will only render on the Browser.</BrowserRender>
</Group>
