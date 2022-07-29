<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Input } from '@svelteuidev/core';
    import { MagnifyingGlass } from 'radix-icons-svelte';
<\/script>

<Input
    override={{ input: { width: '100%', boxSizing: 'border-box' } }}
    icon={MagnifyingGlass}
    variant="headless"
    placeholder="Add your own styles with styles API"
>
    <p slot="rightSection">$</p>
</Input>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Input } from '@svelteuidev/core';
	import { MagnifyingGlass } from 'radix-icons-svelte';
</script>

<Input
	override={{ input: { width: '100%', boxSizing: 'border-box' } }}
	icon={MagnifyingGlass}
	variant="headless"
	placeholder="Add your own styles with styles API"
>
	<p slot="rightSection">$</p>
</Input>
