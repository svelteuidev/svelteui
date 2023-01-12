<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
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
	<Modal {opened} on:close={handleClose} {...args}>Basic modal example</Modal>
</Template>

<Story name="Modal" />
