<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Button, Text, Title, NativeSelect, TextInput } from '@svelteuidev/core';
	import { focustrap } from './use-focus-trap';

	let active = $state(false);
</script>

<Meta title="Composables/use-focus-trap" />

<Template>
	{#snippet children()}
		<Button onclick={() => (active = !active)}
			>{active ? 'Deactivate Focus Trap' : 'Activate Focus Trap'}</Button
		>
		<div use:focustrap={active}>
			<Title>Form</Title>
			<Text>Please fill out this form</Text>
			<TextInput placeholder="Your name" label="Full name" />
			<NativeSelect
				data={['Svelte', 'React', 'Vue', 'Angular', 'Solid']}
				placeholder="Pick one"
				label="Select your favorite framework/library"
				description="This is anonymous"
			/>
			<Button>Submit</Button>
		</div>
	{/snippet}
</Template>

<Story name="use-focus-trap" id="useFocusTrapStory" />
