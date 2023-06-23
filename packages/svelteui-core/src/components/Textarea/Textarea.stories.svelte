<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { Textarea } from './index';
</script>

<Meta title="Components/Textarea" component={Textarea} />

<Template let:args>
	<Textarea {...args} />
</Template>

<Story
	name="Default"
	id="TextareaStory"
	args={{
		label: 'Your story',
		placeholder: 'Once upon a time'
	}}
/>

<Story
	name="Description"
	id="TextareaDescriptionStory"
	args={{
		label: 'Your story',
		description: 'Tell us about yourself',
		placeholder: 'Once upon a time'
	}}
/>

<Story
	name="Resizeable"
	id="TextareaResizeableStory"
	args={{
		label: 'Your story',
		placeholder: 'Once upon a time',
		rows: 4,
		resize: 'vertical'
	}}
/>

<Story
	name="Error"
	id="TextareaErrorStory"
	args={{
		label: 'Your story',
		placeholder: 'Once upon a time',
		error: "That's boring"
	}}
/>
