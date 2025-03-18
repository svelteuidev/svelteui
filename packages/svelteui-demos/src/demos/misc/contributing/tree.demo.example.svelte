<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = '';

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Box } from '@svelteuidev/core';
	import type { CSS } from '@svelteuidev/core';

	const css: CSS = {
		bc: 'transparent'
	};
</script>

<Center>
	<!-- prettier-ignore -->
	<Box root='pre' {css}>
        packages/
        ├── svelteui-composables/
        │   └── src/
        │       └── lib
        ├── svelteui-core/
        │   └── src/
        │       └── lib
        ├── svelteui-dates
        ├── svelteui-demos
        ├── svelteui-motion
        ├── svelteui-prism
        └── svelteui-tests
    </Box>
</Center>
