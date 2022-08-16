<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Menu } from './index';
	import { Text } from '../Text';
	import { Divider } from '../Divider';
	import { Camera, ChatBubble, Gear, MagnifyingGlass, Trash, Width } from 'radix-icons-svelte';
</script>

<Meta title="Components/Menu" component={Menu} />

<Template let:args>
	<Menu {...args}>
		<Menu.Item>Basic Menu</Menu.Item>
	</Menu>
</Template>

<Story name="Menu" />

<Story name="With Content">
	<Menu>
		<Menu.Label>Application</Menu.Label>
		<Menu.Item icon={Gear}>Settings</Menu.Item>
		<Menu.Item icon={ChatBubble}>Messages</Menu.Item>
		<Menu.Item icon={Camera}>Gallery</Menu.Item>
		<Menu.Item icon={MagnifyingGlass}>
			<svelte:fragment slot="rightSection">
				<Text size="xs" color="dimmed">⌘K</Text>
			</svelte:fragment>
			Search
		</Menu.Item>

		<Divider />

		<Menu.Label>Danger zone</Menu.Label>
		<Menu.Item icon={Width}>Transfer my data</Menu.Item>
		<Menu.Item color="red" icon={Trash}>Delete my account</Menu.Item>
	</Menu>
</Story>

<Story name="Custom Control">
	<Menu>
		<Menu.Item>Basic menu with custom control</Menu.Item>
	</Menu>
</Story>
