<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { PasswordInput } from './index';
</script>

<Meta title="Components/PasswordInput" component={PasswordInput} />

<Template let:args>
	<PasswordInput {...args} />
</Template>

<Story
	name="Default"
	id="passwordInputStory"
	args={{
		label: 'Password',
		placeholder: 'A strong password'
	}}
/>

<Story
	name="Description"
	id="passwordInputDescriptionStory"
	args={{
		label: 'Password',
		description: "Make sure you don't tell anyone",
		placeholder: 'A strong password'
	}}
/>

<Story
	name="Large"
	id="passwordInputLargeStory"
	args={{
		label: 'Password',
		size: 'lg'
	}}
/>

<Story
	name="Disabled"
	id="passwordInputDisabledStory"
	args={{
		label: 'Password',
		disabled: true
	}}
/>

<Story
	name="Error"
	id="passwordInputErrorStory"
	args={{
		label: 'Password',
		placeholder: 'A strong password',
		error: "That's boring"
	}}
/>
