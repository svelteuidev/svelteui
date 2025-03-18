<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Burger } from '@svelteuidev/core';

    let opened = false;
<\/script>

<Burger
    {opened}
    on:click={() => (opened = !opened)}
/>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Burger, Center } from '@svelteuidev/core';

	let opened = $state(false);
</script>

<Center>
	<Burger {opened} onclick={() => (opened = !opened)} />
</Center>
