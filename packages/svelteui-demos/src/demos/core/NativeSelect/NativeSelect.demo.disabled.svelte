<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { NativeSelect } from '@svelteuidev/core';
<\/script>

<NativeSelect data={['Svelte', 'Vue', 'Angular', 'React']} label="Disabled select" disabled />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { NativeSelect } from '@svelteuidev/core';
</script>

<NativeSelect data={['Svelte', 'Vue', 'Angular', 'React']} label="Disabled select" disabled />
