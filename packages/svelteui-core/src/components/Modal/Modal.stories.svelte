<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Stack, NativeSelect, TextInput } from '@svelteuidev/core';
	import { Modal } from './index';
	import { Button } from '../Button';

	let opened = false;

	function toggleOpen() {
		opened = !opened;
	}
	function handleClose() {
		opened = false;
	}
</script>

<Meta title="Components/Modal" component={Modal} />

<Template let:args>
	<Button on:click={toggleOpen}>Click Me</Button>
	<Modal {opened} on:close={handleClose} {...args}>
		<Stack>
			<TextInput autofocus placeholder="Your name" label="Full name" />
			<NativeSelect
				data={['Svelte', 'React', 'Vue', 'Angular', 'Solid']}
				placeholder="Pick one"
				label="Select your favorite framework/library"
				description="This is anonymous"
			/>
		</Stack>
	</Modal>
</Template>

<Story name="Modal" id="modalStory" />
