<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Button, Text, Paper, Stack, TextInput } from '@svelteuidev/core';
	import { focustrap } from '../../actions/use-focus-trap';
	import { useFocusReturn } from './use-focus-return';

	const { handleFocusReturn, returnFocus } = useFocusReturn();

	let active = false;

	$: handleFocusReturn(active);

	function handleKeyDown(event: KeyboardEvent) {
		if (event.code === 'Escape') {
			active = false;
		}
	}

	function handleButtonClick() {
		returnFocus();
	}
</script>

<Meta title="Composables/use-focus-return" />

<Template let:args>
	<Button on:click={() => (active = !active)}
		>{active ? 'Deactivate Focus Trap' : 'Activate Focus Trap'}</Button
	>
	<div use:focustrap={active} on:keydown={handleKeyDown}>
		<Paper override={{ width: '500px', mt: '20px' }}>
			<Stack spacing="lg">
				<TextInput placeholder="Your name" label="Full name" />
				<Text>Hit Escape to deactivate focus trap and return focus automatically</Text>
				<Button on:click={handleButtonClick}
					>Click by keyboard navigation to return focus manually</Button
				>
			</Stack>
		</Paper>
	</div>
</Template>

<Story name="use-focus-return" />
