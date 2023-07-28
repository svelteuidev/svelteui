<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { EnvelopeClosed } from 'radix-icons-svelte';
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

<Story
	name="With icon"
	id="textInputIconStory"
	args={{
		label: 'Email',
		placeholder: 'Your email',
		icon: EnvelopeClosed
	}}
/>

<Story name="With icon (slot)" id="textInputIconSlotStory">
	<TextInput label="Email" placeholder="Your email">
		<svelte:fragment slot="icon">
			<EnvelopeClosed />
		</svelte:fragment>
	</TextInput>
</Story>
