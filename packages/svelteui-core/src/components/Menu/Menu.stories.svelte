<script lang="ts">
	import { Camera, ChatBubble, Gear, MagnifyingGlass, Trash, Width } from 'radix-icons-svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Menu, type MenuComponent } from './index';
	import { Button } from '../Button';
	import { Kbd } from '../Kbd';
	import { Divider } from '../Divider';
	import { Center } from '../Center';
	import { SimpleGrid } from '../SimpleGrid';
	import { TextInput } from '../TextInput';

	let menuEvents = $state([]);
	let element: MenuComponent = $state();
</script>

<Meta title="Components/Menu" component={Menu} />

<Template>
	{#snippet children({ args })}
		<Menu {...args}>
			<Menu.Item>Basic Menu</Menu.Item>
		</Menu>
	{/snippet}
</Template>

<Story name="Menu" id="menuStory" />

<Story name="With Content" id="menuContentStory">
	<Menu>
		<Menu.Label>Application</Menu.Label>
		<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
		<Menu.Item iconComponent={ChatBubble}>Messages</Menu.Item>
		<Menu.Item iconComponent={Camera}>Gallery</Menu.Item>
		<Menu.Item iconComponent={MagnifyingGlass}>
			{#snippet rightSection()}
				<Kbd>⌘K</Kbd>
			{/snippet}
			Search
		</Menu.Item>

		<Divider />

		<Menu.Label>Danger zone</Menu.Label>
		<Menu.Item iconComponent={Width}>Transfer my data</Menu.Item>
		<Menu.Item color="red" iconComponent={Trash}>Delete my account</Menu.Item>
	</Menu>
</Story>

<Story name="Custom Control" id="menuCustomControlStory">
	<Menu>
		{#snippet control()}
			<Button>Toggle Menu</Button>
		{/snippet}
		<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
		<Menu.Item iconComponent={ChatBubble}>Messages</Menu.Item>
		<Menu.Item iconComponent={Camera}>Gallery</Menu.Item>
	</Menu>
</Story>

<Story name="Custom placement" id="menuCustomPlacementStory">
	<SimpleGrid cols={3} spacing={100}>
		<Center>
			Start:
			<Menu placement="start" opened>
				<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
			</Menu>
		</Center>
		<Center>
			Center:
			<Menu placement="center" opened>
				<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
			</Menu>
		</Center>
		<Center>
			End:
			<Menu placement="end" opened>
				<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
			</Menu>
		</Center>
		<Center>
			Start:
			<Menu placement="start" opened>
				{#snippet control()}
					<Button>Custom control</Button>
				{/snippet}
				<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
			</Menu>
		</Center>
		<Center>
			Center:
			<Menu placement="center" opened>
				{#snippet control()}
					<Button>Custom control</Button>
				{/snippet}
				<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
			</Menu>
		</Center>
		<Center>
			End:
			<Menu placement="end" opened>
				{#snippet control()}
					<Button>Custom control</Button>
				{/snippet}
				<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
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
		{#snippet control()}
			<Button>Toggle menu</Button>
		{/snippet}
		<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
	</Menu>
	<ol>
		{#each menuEvents as event}
			<li>{event}</li>
		{/each}
	</ol>
</Story>

<Story name="Menu with Input" id="menuWithInputStory">
	<Menu>
		{#snippet control()}
			<Button>Toggle Menu</Button>
		{/snippet}
		<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
		<Menu.Item iconComponent={ChatBubble}>Messages</Menu.Item>
		<Menu.Item iconComponent={Camera}>Gallery</Menu.Item>
		<Menu.Label><TextInput placeholder="Search" /></Menu.Label>
	</Menu>
</Story>

<Story name="Outside Toggle" id="menuOutsideToggleStory">
	<Button on:click={() => element.toggle()}>Toggle Menu</Button>

	<Menu bind:this={element}>
		<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
		<Menu.Item iconComponent={ChatBubble}>Messages</Menu.Item>
		<Menu.Item iconComponent={Camera}>Gallery</Menu.Item>
	</Menu>
</Story>

<Story name="Close on Item Click (false)" id="menuCloseOnItemClickStory">
	<Menu closeOnItemClick={false}>
		<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
		<Menu.Item iconComponent={ChatBubble}>Messages</Menu.Item>
		<Menu.Item iconComponent={Camera}>Gallery</Menu.Item>
	</Menu>
</Story>
