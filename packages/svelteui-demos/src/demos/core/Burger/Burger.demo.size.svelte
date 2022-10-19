<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Burger } from '@svelteuidev/core';
<\/script>

<Burger size='xs' />
<Burger size='sm' />
<Burger size='md' />
<Burger size='lg' />
<Burger size='xl' />`;

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
	<SimpleGrid cols={5} override={{ alignItems: 'center' }}>
		<Burger size="xs" opened={opened[0]} on:click={() => (opened[0] = !opened[0])} />
		<Burger size="sm" opened={opened[1]} on:click={() => (opened[1] = !opened[1])} />
		<Burger size="md" opened={opened[2]} on:click={() => (opened[2] = !opened[2])} />
		<Burger size="lg" opened={opened[3]} on:click={() => (opened[3] = !opened[3])} />
		<Burger size="xl" opened={opened[4]} on:click={() => (opened[4] = !opened[4])} />
	</SimpleGrid>
</Center>
