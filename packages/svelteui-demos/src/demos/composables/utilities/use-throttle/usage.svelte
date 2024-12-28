<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Button, Text, Stack } from '@svelteuidev/core';
	import { useThrottle } from '@svelteuidev/composables';

	let updated = 0;
	let clicked = 0;

	const throttledFn = useThrottle(() => {
		updated += 1;
	}, 1000);
	
	const clickedFn = () => {
		clicked += 1;
		throttledFn();
	};
<\/script>

<Stack align="center">
	<Button on:click={clickedFn}>Smash me!</Button>
	<Text root="note" size="sm">Delay is set to 1000ms for this demo.</Text>

	<Text>Button clicked: {clicked}</Text>
	<Text>Event handler called: {updated}</Text>
</Stack>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Button, Text, Stack } from '@svelteuidev/core';
	import { useThrottle } from '@svelteuidev/composables';

	let updated = $state(0);
	let clicked = $state(0);
	const throttledFn = useThrottle(() => {
		updated += 1;
	}, 1000);
	const clickedFn = () => {
		clicked += 1;
		throttledFn();
	};
</script>

<Stack align="center">
	<Button on:click={clickedFn}>Smash me!</Button>
	<Text root="note" size="sm">Delay is set to 1000ms for this demo.</Text>

	<Text>Button clicked: {clicked}</Text>
	<Text>Event handler called: {updated}</Text>
</Stack>
