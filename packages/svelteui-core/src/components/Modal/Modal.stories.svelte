<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Stack, NativeSelect, TextInput } from '@svelteuidev/core';
	import { Modal } from './index';
	import { Button } from '../Button';

	let opened = $state(false);

	function toggleOpen() {
		opened = !opened;
	}
	function handleClose() {
		opened = false;
	}

	const content = Array(100)
		.fill(0)
		.map((_, index) => 'Svelte is a complier');
</script>

<Meta title="Components/Modal" component={Modal} />

<Template>
	{#snippet children({ args })}
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
	{/snippet}
</Template>

<Story name="Modal" id="modalStory" />

<Story name="With Overflow" id="modalOverflowStory">
	<Button on:click={toggleOpen}>Click Me</Button>
	<Modal {opened} on:close={handleClose} overflow="inside">
		{#each content as _}
			<p>{_}</p>
		{/each}
	</Modal>
</Story>
