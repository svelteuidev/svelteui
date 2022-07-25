<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Burger } from '@svelteuidev/core';
<\/script>

<Burger />
<Burger color="#fe6734" />
<Burger color="#45f50d" />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Burger, Center, SimpleGrid } from '@svelteuidev/core';

	let opened = [];
</script>

<Center>
	<SimpleGrid cols={3} override={{ alignItems: 'center' }}>
		<Burger opened={opened[0]} on:click={() => (opened[0] = !opened[0])} />
		<Burger color="#fe6734" opened={opened[1]} on:click={() => (opened[1] = !opened[1])} />
		<Burger color="#45f50d" opened={opened[2]} on:click={() => (opened[2] = !opened[2])} />
	</SimpleGrid>
</Center>
