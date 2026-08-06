<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { InfoCircled } from 'radix-icons-svelte';
	import Alert from '../Alert/Alert.svelte';
	import Button from '../Button/Button.svelte';
	import Input from '../Input/Input.svelte';
	import Menu from '../Menu/Menu.svelte';
	import MenuItem from '../Menu/MenuItem/MenuItem.svelte';
	import Notification from '../Notification/Notification.svelte';
	import Tab from '../Tabs/Tab/Tab.svelte';
	import Tabs from '../Tabs/Tabs.svelte';
	import IconRenderer from './IconRenderer.svelte';

	const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

	iconSvg.setAttribute('fill', 'none');
	iconSvg.setAttribute('viewBox', '0 0 24 24');
	iconSvg.setAttribute('stroke', 'currentColor');
	iconSvg.classList.add('post-icon');

	iconPath.setAttribute(
		'd',
		'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
	);
	iconPath.setAttribute('stroke-linecap', 'round');
	iconPath.setAttribute('stroke-linejoin', 'round');
	iconPath.setAttribute('stroke-width', '2');

	iconSvg.appendChild(iconPath);
</script>

<Meta
	title="Components/IconRenderer/Usage"
	component={IconRenderer}
	parameters={{
		controls: {
			exclude: /.*/g,
			hideNoControlsWarning: true
		}
	}}
/>

<Story name="Alert" id="iconRendererAlertStory">
	<Alert iconComponent={InfoCircled} title="Example 1">
		This alert uses a Svelte component for it's icon
	</Alert>
	<br />
	<Alert iconComponent={iconSvg} title="Example 2"
		>This alert uses an SVG element for it's icon</Alert
	>
</Story>

<Story name="Button" id="iconRendererButtonStory">
	<Button>
		{#snippet leftIcon()}
			<IconRenderer icon={InfoCircled} />
		{/snippet}
		Button with Svelte component icon
	</Button>
	<br />
	<Button>
		{#snippet leftIcon()}
			<IconRenderer icon={iconSvg} />
		{/snippet}
		Button with SVG icon
	</Button>
</Story>

<Story name="Input" id="iconRendererInputStory">
	<Input iconComponent={InfoCircled} placeholder="Search" />
	<br />
	<Input iconComponent={iconSvg} placeholder="Search" />
</Story>

<Story name="MenuItem" id="iconRendererMenuItemStory">
	<Menu>
		{#snippet control()}
			<div>Click Me</div>
		{/snippet}
		<MenuItem iconComponent={InfoCircled}>Svelte component</MenuItem>
		<MenuItem iconComponent={iconSvg}>SVG Element</MenuItem>
	</Menu>
</Story>

<Story name="Notification" id="iconRendererNotificationStory">
	<Notification title="Svelte Component" icon={InfoCircled}>
		A notification with an Svelte component icon
	</Notification>
	<br />
	<Notification title="SVG element" icon={iconSvg}>
		A notification with an SVG element icon
	</Notification>
</Story>

<Story name="Tabs" id="iconRendererTabsStory">
	<Tabs>
		<Tab label="Svelte Component" icon={InfoCircled}>A tab with an Svelte component icon</Tab>
		<Tab label="SVG element" icon={iconSvg}>A tab with an SVG element icon</Tab>
	</Tabs>
</Story>
