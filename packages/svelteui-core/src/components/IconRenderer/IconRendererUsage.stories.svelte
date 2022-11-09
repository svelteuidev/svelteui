<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
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

<Story name="Alert">
	<Alert icon={InfoCircled} title="Example 1">
		This alert uses a Svelte component for it's icon
	</Alert>
	<br />
	<Alert icon={iconSvg} title="Example 2">This alert uses an SVG element for it's icon</Alert>
</Story>

<Story name="Button">
	<Button>
		<IconRenderer slot="leftIcon" icon={InfoCircled} />
		Button with Svelte component icon
	</Button>
	<br />
	<Button>
		<IconRenderer slot="leftIcon" icon={iconSvg} />
		Button with SVG icon
	</Button>
</Story>

<Story name="Input">
	<Input icon={InfoCircled} placeholder="Search" />
	<br />
	<Input icon={iconSvg} placeholder="Search" />
</Story>

<Story name="MenuItem">
	<Menu>
		<div slot="control">Click Me</div>
		<MenuItem icon={InfoCircled}>Svelte component</MenuItem>
		<MenuItem icon={iconSvg}>SVG Element</MenuItem>
	</Menu>
</Story>

<Story name="Notification">
	<Notification title="Svelte Component" icon={InfoCircled}>
		A notification with an Svelte component icon
	</Notification>
	<br />
	<Notification title="SVG element" icon={iconSvg}>
		A notification with an SVG element icon
	</Notification>
</Story>

<Story name="Tabs">
	<Tabs>
		<Tab label="Svelte Component" icon={InfoCircled}>A tab with an Svelte component icon</Tab>
		<Tab label="SVG element" icon={iconSvg}>A tab with an SVG element icon</Tab>
	</Tabs>
</Story>
