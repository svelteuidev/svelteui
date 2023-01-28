<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { NativeSelect } from '@svelteuidev/core';
    import { ChevronDown } from 'radix-icons-svelte';
<\/script>

<NativeSelect
	data={['Svelte', 'Vue', 'Angular', 'React']}
	label="Select your favorite framework/library"
>
  <svelte:component slot="rightSection" this={ChevronDown} />
</NativeSelect>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { NativeSelect } from '@svelteuidev/core';
	import { ChevronDown } from 'radix-icons-svelte';
</script>

<NativeSelect
	data={['Svelte', 'Vue', 'Angular', 'React']}
	label="Select your favorite framework/library"
>
	<svelte:component this={ChevronDown} slot="rightSection" />
</NativeSelect>
