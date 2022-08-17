<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Menu } from './index';
	import { Button } from '../Button';
	import { Kbd } from '../Kbd';
	import { Divider } from '../Divider';
	import { Camera, ChatBubble, Gear, MagnifyingGlass, Trash, Width } from 'radix-icons-svelte';
</script>

<Meta title="Components/Menu" component={Menu} />

<Template let:args>
	<Menu {...args}>
		<Menu.Item>Basic Menu</Menu.Item>
	</Menu>
</Template>

<Story name="Menu" id="menu" />

<Story name="With Content" id="menu-content">
	<Menu>
		<Menu.Label>Application</Menu.Label>
		<Menu.Item icon={Gear}>Settings</Menu.Item>
		<Menu.Item icon={ChatBubble}>Messages</Menu.Item>
		<Menu.Item icon={Camera}>Gallery</Menu.Item>
		<Menu.Item icon={MagnifyingGlass}>
			<Kbd slot="rightSection">⌘K</Kbd>
			Search
		</Menu.Item>

		<Divider />

		<Menu.Label>Danger zone</Menu.Label>
		<Menu.Item icon={Width}>Transfer my data</Menu.Item>
		<Menu.Item color="red" icon={Trash}>Delete my account</Menu.Item>
	</Menu>
</Story>

<Story name="Custom Control" id="menu-custom-control">
	<Menu>
		<Button slot="control">Toggle Menu</Button>
		<Menu.Item icon={Gear}>Settings</Menu.Item>
		<Menu.Item icon={ChatBubble}>Messages</Menu.Item>
		<Menu.Item icon={Camera}>Gallery</Menu.Item>
	</Menu>
</Story>
