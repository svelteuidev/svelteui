<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { AspectRatio } from '@svelteuidev/core';
<\/script>

<AspectRatio ratio={3 / 5}>
	<div style="background-color: purple">Aspect Ratio</div>
</AspectRatio>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { AspectRatio } from '@svelteuidev/core';
</script>

<AspectRatio ratio={3 / 5} style="max-width: 200px">
	<div style="background-color: purple">Aspect Ratio</div>
</AspectRatio>
