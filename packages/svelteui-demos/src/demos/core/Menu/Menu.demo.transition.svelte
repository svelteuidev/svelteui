<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Divider, Menu, Text } from '@svelteuidev/core';
	import { Camera, ChatBubble, Gear, MagnifyingGlass, Trash, Width } from 'radix-icons-svelte';
<\/script>

<Menu transition='fly' transitionOptions={{ y: 200 }}>
    <Menu.Label>Application</Menu.Label>
    <Menu.Item icon={Gear}>Settings</Menu.Item>
    <Menu.Item icon={ChatBubble}>Messages</Menu.Item>
    <Menu.Item icon={Camera}>Gallery</Menu.Item>
    <Menu.Item icon={MagnifyingGlass} disabled>
        <svelte:fragment slot='rightSection'>
            <Text size="xs" color="dimmed">⌘K</Text>
        </svelte:fragment>
        Search
    </Menu.Item>

    <Divider />

    <Menu.Label>Danger zone</Menu.Label>
    <Menu.Item icon={Width}>Transfer my data</Menu.Item>
    <Menu.Item color="red" icon={Trash}>Delete my account</Menu.Item>
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
	<Menu transition="fly" transitionOptions={{ y: 200 }}>
		<Menu.Label>Application</Menu.Label>
		<Menu.Item icon={Gear}>Settings</Menu.Item>
		<Menu.Item icon={ChatBubble}>Messages</Menu.Item>
		<Menu.Item icon={Camera}>Gallery</Menu.Item>
		<Menu.Item icon={MagnifyingGlass} disabled>
			{#snippet rightSection()}
					
					<Text size="xs" color="dimmed">⌘K</Text>
				
					{/snippet}
			Search
		</Menu.Item>

		<Divider />

		<Menu.Label>Danger zone</Menu.Label>
		<Menu.Item icon={Width}>Transfer my data</Menu.Item>
		<Menu.Item color="red" icon={Trash}>Delete my account</Menu.Item>
	</Menu>
</Center>
