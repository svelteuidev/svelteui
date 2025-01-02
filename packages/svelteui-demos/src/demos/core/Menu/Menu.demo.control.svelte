<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Button, Divider, Menu } from '@svelteuidev/core';
	import { Camera, ChatBubble, Gear } from 'radix-icons-svelte';
<\/script>

<Menu>
    {#snippet control()}
		<Button>Toggle Menu</Button>
	{/snippet}
    <Menu.Item iconComponent={Gear}>Settings</Menu.Item>
    <Menu.Item iconComponent={ChatBubble}>Messages</Menu.Item>
    <Menu.Item iconComponent={Camera}>Gallery</Menu.Item>
</Menu>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Center, Menu } from '@svelteuidev/core';
	import { Camera, ChatBubble, Gear } from 'radix-icons-svelte';
</script>

<Center>
	<Menu>
		{#snippet control()}
			<Button>Toggle Menu</Button>
		{/snippet}
		<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
		<Menu.Item iconComponent={ChatBubble}>Messages</Menu.Item>
		<Menu.Item iconComponent={Camera}>Gallery</Menu.Item>
	</Menu>
</Center>
