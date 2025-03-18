<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Divider, Menu, Text } from '@svelteuidev/core';
	import { Camera, ChatBubble, Gear, MagnifyingGlass, Trash, Width } from 'radix-icons-svelte';
<\/script>

<Menu>
    <Menu.Label>Application</Menu.Label>
    <Menu.Item iconComponent={Gear}>Settings</Menu.Item>
    <Menu.Item iconComponent={ChatBubble}>Messages</Menu.Item>
    <Menu.Item iconComponent={Camera}>Gallery</Menu.Item>
    <Menu.Item iconComponent={MagnifyingGlass}>
        {#snippet rightSection()}
			<Text size="xs" color="dimmed">⌘K</Text>
		{/snippet}
        Search
    </Menu.Item>

    <Divider />

    <Menu.Label>Danger zone</Menu.Label>
    <Menu.Item iconComponent={Width}>Transfer my data</Menu.Item>
    <Menu.Item color="red" iconComponent={Trash}>Delete my account</Menu.Item>
</Menu>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Divider, Menu, Text } from '@svelteuidev/core';
	import { Camera, ChatBubble, Gear, MagnifyingGlass, Trash, Width } from 'radix-icons-svelte';
</script>

<Center>
	<Menu>
		<Menu.Label>Application</Menu.Label>
		<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
		<Menu.Item iconComponent={ChatBubble}>Messages</Menu.Item>
		<Menu.Item iconComponent={Camera}>Gallery</Menu.Item>
		<Menu.Item iconComponent={MagnifyingGlass}>
			{#snippet rightSection()}
				<Text size="xs" color="dimmed">⌘K</Text>
			{/snippet}
			Search
		</Menu.Item>

		<Divider />

		<Menu.Label>Danger zone</Menu.Label>
		<Menu.Item iconComponent={Width}>Transfer my data</Menu.Item>
		<Menu.Item color="red" iconComponent={Trash}>Delete my account</Menu.Item>
	</Menu>
</Center>
