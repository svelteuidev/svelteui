<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Button, Text, Stack } from '@svelteuidev/core';
	import { useDebounce } from './index';

	let updated = 0;
	let clicked = 0;
	const debouncedFn = useDebounce(() => {
		updated += 1;
	}, 1000);
	const clickedFn = () => {
		clicked += 1;
		debouncedFn();
	};
</script>

<Meta title="Composables/use-debounce" />

<Template let:args>
	<Stack align="center">
		<Button on:click={clickedFn}>Smash me!</Button>
		<Text root="note" size="sm">Delay is set to 1000ms for this demo.</Text>

		<Text>Button clicked: {clicked}</Text>
		<Text>Event handler called: {updated}</Text>
	</Stack>
</Template>

<Story name="use-debounce" id="useDebounceStory" />
