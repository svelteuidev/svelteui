<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string) => `
<script>
    import { Divider, Menu, Text } from '@svelteuidev/core';
<\/script>

<Menu opened={true}${props}>
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

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'position',
				type: 'select',
				data: [
					{ label: 'bottom', value: 'bottom' },
					{ label: 'top', value: 'top' },
					{ label: 'right', value: 'right' },
					{ label: 'left', value: 'left' }
				],
				initialValue: 'bottom',
				defaultValue: 'bottom'
			},
			{
				name: 'placement',
				type: 'select',
				data: [
					{ label: 'start', value: 'start' },
					{ label: 'center', value: 'center' },
					{ label: 'end', value: 'end' }
				],
				initialValue: 'start',
				defaultValue: 'start'
			},
			{ name: 'gutter', type: 'number', initialValue: 5, min: -20, max: 20 },
			{ name: 'withArrow', label: 'With arrow', type: 'boolean', initialValue: false, defaultValue: false }
		],
		multiline: true
	};
</script>

<script lang="ts">
	import type { MenuProps } from '@svelteuidev/core';
	import { Center, Divider, Menu, Text } from '@svelteuidev/core';
    import { Camera, ChatBubble, Gear, MagnifyingGlass, Trash, Width } from 'radix-icons-svelte';

	export let props: Partial<MenuProps> = {};
</script>

<Center>
    <Menu opened={true} {...props}>
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
</Center>