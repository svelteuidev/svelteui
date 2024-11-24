<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { JsonInput } from './index';

	const sampleJson =
		'{"name": "Hanazono Yurine", "friends": [{"name": "Jashinchan"}, {"name": "Medusa"}, {"name": "Minos"}]}';
</script>

<Meta title="Components/JsonInput" component={JsonInput} />

<Template >
	{#snippet children({ args })}
		<JsonInput {...args} />
	{/snippet}
</Template>

<Story
	name="Default"
	id="jsonInputStory"
	args={{
		label: 'Character Profile',
		placeholder: 'Enter JSON data',
		value: sampleJson,
		required: true
	}}
/>

<Story
	name="Format On Blur"
	id="jsonInputFormatOnBlurStory"
	args={{
		label: 'Character Profile',
		placeholder: 'Enter JSON data',
		value: sampleJson,
		formatOnBlur: true
	}}
/>

<Story
	name="Resizable"
	id="jsonInputResizableStory"
	args={{
		label: 'Robot configuration',
		description: 'Configure your new robot butler',
		placeholder: 'Enter JSON data',
		rows: 4,
		resize: 'vertical'
	}}
/>

<Story
	name="Error"
	id="jsonInputErrorStory"
	args={{
		label: 'Robot configuration',
		placeholder: 'Enter JSON data',
		error: 'Generic error message'
	}}
/>

<Story
	name="Validation"
	id="jsonInputValidationStory"
	args={{
		label: 'Robot configuration',
		placeholder: 'Enter JSON data',
		validationError: 'Invalid JSON'
	}}
/>
