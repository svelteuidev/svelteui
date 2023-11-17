<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import type { SvelteUINumberSize } from '$lib/styles-old';
	import RadioGroup from './RadioGroup/RadioGroup.svelte';
	import { Radio } from './index';

	const spacings: SvelteUINumberSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
	const directions: ('column' | 'row')[] = ['column', 'row'];

	let bindValue = 'three';
	let bindGroup = 'two';
</script>

<Meta title="Components/Radio" component={Radio} />

<Template let:args>
	<Radio {...args} checked />
	<Radio {...args} />
</Template>

<Story name="Default" args={{ label: 'Default Radio' }} id="radioStory">
	<Radio checked label="Default Radio" />
	<Radio label="Default Radio" />
</Story>

<Story name="Label Direction" id="radioLabelDirectionStory">
	<Radio labelDirection={'right'}>Right label</Radio>
	<Radio labelDirection={'left'}>Left label</Radio>
</Story>

<Story name="Bind value" id="radioBindStory">
	<RadioGroup
		bind:value={bindValue}
		items={[
			{ label: 'One', value: 'one' },
			{ label: 'Two', value: 'two' },
			{ label: 'Three', value: 'three' }
		]}
	/>
	<p>Variable bound to value: <code>{bindValue}</code></p>
</Story>

<Story name="Bind group" id="radioBindGroupStory">
	<RadioGroup
		bind:group={bindGroup}
		items={[
			{ label: 'One', value: 'one' },
			{ label: 'Two', value: 'two' },
			{ label: 'Three', value: 'three' }
		]}
	/>
	<p>Variable bound to group: <code>{bindGroup}</code></p>
</Story>

<Story name="Spacing" id="radioSpacingStory">
	{#each spacings as spacing}
		<p>Spacing: {spacing}</p>
		<RadioGroup
			bind:value={bindValue}
			{spacing}
			size={spacing}
			items={[
				{ label: 'One', value: 'one' },
				{ label: 'Two', value: 'two' },
				{ label: 'Three', value: 'three' }
			]}
		/>
	{/each}
</Story>

<Story name="Directions" id="radioDirectionsStory">
	{#each directions as direction}
		<p>Direction: {direction}</p>
		<RadioGroup
			bind:value={bindValue}
			{direction}
			items={[
				{ label: 'One', value: 'one' },
				{ label: 'Two', value: 'two' },
				{ label: 'Three', value: 'three' }
			]}
		/>
	{/each}
</Story>

<Story name="Input label" id="radioLabelStory">
	<RadioGroup
		bind:value={bindValue}
		label="Pick as many as you like"
		items={[
			{ label: 'One', value: 'one' },
			{ label: 'Two', value: 'two' },
			{ label: 'Three', value: 'three' }
		]}
	/>
</Story>
