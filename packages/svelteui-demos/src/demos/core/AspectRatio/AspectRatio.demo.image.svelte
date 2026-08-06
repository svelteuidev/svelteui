<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import {  AspectRatio, Image } from '@svelteuidev/core';
<\/script>

<AspectRatio ratio={16 / 9}>
	<Image
		src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
		alt="Panda"
	/>
</AspectRatio>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { AspectRatio, Image } from '@svelteuidev/core';
</script>

<AspectRatio ratio={16 / 9} style="max-width: 300px">
	<Image
		src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
		alt="Panda"
	/>
</AspectRatio>
