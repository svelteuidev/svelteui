<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { useSvelteUITheme, type SvelteUINumberSize } from '$lib/styles';
	import { Group } from '../Group';
	import { Stack } from '../Stack';
	import { Radio } from './index';
	import RadioGroup from './RadioGroup/RadioGroup.svelte';
	import { size } from '$lib/styles/theme/functions/fns/size/size';

	const theme = useSvelteUITheme();
	const colors = Object.keys(theme.colorNames);
	const spacings: SvelteUINumberSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
	const directions: ('column' | 'row')[] = ['column', 'row'];
	const labelDirections: ('right' | 'bottom')[] = ['right', 'bottom'];

	let bindValue;
	let val;
	let selectedval = 'default';
</script>

<Meta title="Components/Radio" component={Radio} />

<Template let:args>
	<Radio {...args} />
</Template>

<Story name="Radio">
	<RadioGroup bind:value={selectedval}>
		<Radio  value="default">Default Radio</Radio>
		<Radio variant="filled" value="filed">Filled Radio</Radio>
		<Radio  labelDirection="bottom" variant="outline" value="outline">Outline Radio</Radio>
		<Radio disabled value="disable">Disabled Radio</Radio> 
	</RadioGroup>
	<Radio checked disabled value="test">Checked Disabled Radio</Radio>
	<p>Variable bound to value: <code>{selectedval}</code></p>
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
	<p>Variable bound to value: <code>{JSON.stringify(bindValue)}</code></p>
</Story>

<Story name="Spacing">
	{#each spacings as spacing}
		<p>Spacing: {spacing}</p>
		<RadioGroup
			bind:value={bindValue}
			{spacing}
			size={spacing.toString()}
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
			labelDirection={'right'}
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
