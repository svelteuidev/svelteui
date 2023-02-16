<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import type { SvelteUINumberSize } from '$lib/styles';
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

<Story name="Default" args={{ label: 'Default Radio' }}>
	<Radio checked label="Default Radio" />
	<Radio label="Default Radio" />
</Story>

<Story name="Label Direction">
	<Radio labelDirection={'right'}>Right label</Radio>
	<Radio labelDirection={'left'}>Left label</Radio>
</Story>

<Story name="Bind value">
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

<Story name="Bind group">
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

<Story name="Spacing">
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

<Story name="Directions">
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

<Story name="Input label">
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
