<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { NativeSelect } from '@svelteuidev/core';
<\/script>

<NativeSelect
    data={[
      { label: 'Svelte', value: 'svelte' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'React', value: 'react' }
    ]}
    placeholder="Pick one"
    label="Select your favorite framework/library"
/>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { NativeSelect } from '@svelteuidev/core';
</script>

<NativeSelect
	data={[
		{ label: 'Svelte', value: 'svelte' },
		{ label: 'Vue', value: 'vue' },
		{ label: 'Angular', value: 'angular' },
		{ label: 'React', value: 'react' }
	]}
	placeholder="Pick one"
	label="Select your favorite framework/library"
/>
