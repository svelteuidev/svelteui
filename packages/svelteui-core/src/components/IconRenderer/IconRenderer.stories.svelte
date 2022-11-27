<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { InfoCircled } from 'radix-icons-svelte';
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
	title="Components/IconRenderer"
	component={IconRenderer}
	argTypes={{
		icon: {
			control: false
		},
		iconSize: {
			control: 'number'
		}
	}}
/>

<Template let:args>
	<span>Svelte component</span>
	<IconRenderer {...args} icon={InfoCircled} />
	<br />
	<span>SVG element</span>
	<IconRenderer {...args} icon={iconSvg} />
</Template>

<Story
	name="Default"
	args={{
		iconSize: 16
	}}
/>
