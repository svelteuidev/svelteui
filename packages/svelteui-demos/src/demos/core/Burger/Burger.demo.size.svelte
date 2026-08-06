<script lang="ts" module>
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

	let opened = $state([]);
</script>

<Center>
	<SimpleGrid cols={5} override={{ alignItems: 'center' }}>
		<Burger size="xs" opened={opened[0]} onclick={() => (opened[0] = !opened[0])} />
		<Burger size="sm" opened={opened[1]} onclick={() => (opened[1] = !opened[1])} />
		<Burger size="md" opened={opened[2]} onclick={() => (opened[2] = !opened[2])} />
		<Burger size="lg" opened={opened[3]} onclick={() => (opened[3] = !opened[3])} />
		<Burger size="xl" opened={opened[4]} onclick={() => (opened[4] = !opened[4])} />
	</SimpleGrid>
</Center>
