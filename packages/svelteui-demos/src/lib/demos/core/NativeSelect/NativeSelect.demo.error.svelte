<script lang='ts' context='module'>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code =
`<script>
    import { NativeSelect } from '@svelteuidev/core';
<\/script>

<NativeSelect
    data={['Svelte', 'Vue', 'Angular', 'React']}
    placeholder="Pick one"
    label="Select your favorite framework/library"
    error
/>
<NativeSelect
    data={['Svelte', 'Vue', 'Angular', 'React']}
    placeholder="Pick one"
    label="Select your favorite framework/library"
    error="Pick at least one item"
/>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang='ts'>
	import { NativeSelect } from '@svelteuidev/core';
</script>

<NativeSelect
    data={['Svelte', 'Vue', 'Angular', 'React']}
    placeholder="Pick one"
    label="Select your favorite framework/library"
    error
/>
<NativeSelect
    data={['Svelte', 'Vue', 'Angular', 'React']}
    placeholder="Pick one"
    label="Select your favorite framework/library"
    error="Pick at least one item"
/>