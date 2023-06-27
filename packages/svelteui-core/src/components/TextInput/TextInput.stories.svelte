<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { TextInput } from './index';
</script>

<Meta title="Components/TextInput" component={TextInput} />

<Template let:args>
	<TextInput {...args} />
</Template>

<Story
	name="Default"
	id="textInputStory"
	args={{
		label: 'Full name'
	}}
/>

<Story
	name="Description"
	id="textInputDescriptionStory"
	args={{
		label: 'Full name',
		description: 'Tell us your name',
		placeholder: 'Hanazono Yurine'
	}}
/>

<Story
	name="Error"
	id="textInputErrorStory"
	args={{
		label: 'Full Name',
		placeholder: 'Hanazono Yurine',
		error: 'Something went wrong'
	}}
/>
