<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { Textarea } from './index';
</script>

<Meta title="Components/Textarea" component={Textarea} />

<Template>
	{#snippet children({ args })}
		<Textarea {...args} />
	{/snippet}
</Template>

<Story
	name="Default"
	id="textareaStory"
	args={{
		label: 'Your story',
		placeholder: 'Once upon a time'
	}}
/>

<Story
	name="Description"
	id="textareaDescriptionStory"
	args={{
		label: 'Your story',
		description: 'Tell us about yourself',
		placeholder: 'Once upon a time'
	}}
/>

<Story
	name="Resizable"
	id="textareaResizableStory"
	args={{
		label: 'Your story',
		placeholder: 'Once upon a time',
		rows: 4,
		resize: 'vertical'
	}}
/>

<Story
	name="Error"
	id="textareaErrorStory"
	args={{
		label: 'Your story',
		placeholder: 'Once upon a time',
		error: "That's boring"
	}}
/>
