<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { focustrap } from '@svelteuidev/composables';
	import { Menu } from './index';
	import { Button } from '../Button';
	import { Kbd } from '../Kbd';
	import { Divider } from '../Divider';
	import { Center } from '../Center';
	import { SimpleGrid } from '../SimpleGrid';
	import { TextInput } from '../TextInput';
	import { Camera, ChatBubble, Gear, MagnifyingGlass, Trash, Width } from 'radix-icons-svelte';

	let menuEvents = [];
</script>

<Meta title="Components/Menu" component={Menu} />

<Template let:args>
	<Menu {...args}>
		<Menu.Item>Basic Menu</Menu.Item>
	</Menu>
</Template>

<Story name="Menu" id="menuStory" />

<Story name="With Content" id="menuContentStory">
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

<Story name="Custom Control" id="menuCustomControlStory">
	<Menu>
		<Button slot="control">Toggle Menu</Button>
		<Menu.Item icon={Gear}>Settings</Menu.Item>
		<Menu.Item icon={ChatBubble}>Messages</Menu.Item>
		<Menu.Item icon={Camera}>Gallery</Menu.Item>
	</Menu>
</Story>

<Story name="Custom placement" id="menuCustomPlacementStory">
	<SimpleGrid cols={3} spacing={100}>
		<Center>
			Start:
			<Menu placement="start" opened>
				<Menu.Item icon={Gear}>Settings</Menu.Item>
			</Menu>
		</Center>
		<Center>
			Center:
			<Menu placement="center" opened>
				<Menu.Item icon={Gear}>Settings</Menu.Item>
			</Menu>
		</Center>
		<Center>
			End:
			<Menu placement="end" opened>
				<Menu.Item icon={Gear}>Settings</Menu.Item>
			</Menu>
		</Center>
		<Center>
			Start:
			<Menu placement="start" opened>
				<Button slot="control">Custom control</Button>
				<Menu.Item icon={Gear}>Settings</Menu.Item>
			</Menu>
		</Center>
		<Center>
			Center:
			<Menu placement="center" opened>
				<Button slot="control">Custom control</Button>
				<Menu.Item icon={Gear}>Settings</Menu.Item>
			</Menu>
		</Center>
		<Center>
			End:
			<Menu placement="end" opened>
				<Button slot="control">Custom control</Button>
				<Menu.Item icon={Gear}>Settings</Menu.Item>
			</Menu>
		</Center>
	</SimpleGrid>
</Story>

<Story name="Event listeners" id="menuEventListenersStory">
	<Button on:click={() => (menuEvents = [...menuEvents, 'button click'])}>Test event</Button>
	<Menu
		on:open={() => (menuEvents = [...menuEvents, 'opened'])}
		on:close={() => (menuEvents = [...menuEvents, 'closed'])}
	>
		<Button slot="control">Toggle menu</Button>
		<Menu.Item icon={Gear}>Settings</Menu.Item>
	</Menu>
	<ol>
		{#each menuEvents as event}
			<li>{event}</li>
		{/each}
	</ol>
</Story>

<Story name="Menu with Input" id="menuWithInputStory">
	<Menu>
		<Button slot="control">Toggle Menu</Button>
		<Menu.Item icon={Gear}>Settings</Menu.Item>
		<Menu.Item icon={ChatBubble}>Messages</Menu.Item>
		<Menu.Item icon={Camera}>Gallery</Menu.Item>
		<Menu.Label><TextInput placeholder="Search" /></Menu.Label>
	</Menu>
</Story>
