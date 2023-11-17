<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { LockClosed } from 'radix-icons-svelte';
	import { useSvelteUITheme } from '$lib/styles-old';
	import { Group } from '../Group';
	import { Button } from './index';

	const theme = useSvelteUITheme();
	const colors = Object.keys(theme.colorNames);
</script>

<Meta title="Components/Button" component={Button} />

<Template let:args>
	<Button {...args} />
</Template>

<Template id="variants" let:args>
	<Group mt="xl">
		<Button {...args} variant="filled">Filled button</Button>
		<Button {...args} variant="light">Light button</Button>
		<Button {...args} variant="outline">Outline button</Button>
		<Button {...args} variant="default">Default button</Button>
		<Button {...args} variant="white">White button</Button>
		<Button {...args} variant="gradient">Gradient button</Button>
		<Button {...args} variant="subtle">Subtle button</Button>
	</Group>
</Template>

<Story name="Button" id="buttonStory" />

<Story name="Colors" id="buttonColorsStory">
	<div style="padding:40px;">
		{#each colors as color}
			<Group mt="xl">
				<Button {color}>Filled button</Button>
				<Button {color} variant="light">Light button</Button>
				<Button {color} variant="outline">Outline button</Button>
				<Button {color} variant="gradient">Gradient button</Button>
			</Group>
		{/each}
	</div>
</Story>

<Story name="With icon" id="buttonIconStory">
	<Button>
		<LockClosed slot="leftIcon" />
		Sign Up
	</Button>
</Story>

<Story name="Disabled" id="buttonDisabledStory" template="variants" args={{ disabled: true }} />

<Story name="Loading" id="buttonLoadingStory" template="variants" args={{ loading: true }} />

<Story
	name="With href"
	id="buttonHrefStory"
	template="variants"
	args={{ href: 'https://www.svelteui.org', external: true, disabled: false, loading: false }}
/>
