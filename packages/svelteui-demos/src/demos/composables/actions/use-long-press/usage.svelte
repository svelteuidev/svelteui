<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Button } from '@svelteuidev/core';
    import { longpress } from '@svelteuidev/composables';

    let pressed = false;
	let duration = 2000;
<\/script>

<div>
    <input type=range bind:value={duration} max={2000} step={100} />
    {duration}ms
</div>

<Button 
    use={[[longpress, duration]]}
    on:longpress="{() => pressed = true}"
    on:mouseenter="{() => pressed = false}"
>
    press and hold
</Button>

{#if pressed}
    <p>congratulations, you pressed and held for {duration} ms</p>
{/if}`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Button, Stack } from '@svelteuidev/core';
	import { longpress } from '@svelteuidev/composables';

	let pressed = $state(false);
	let duration = $state(2000);
</script>

<Stack align="center">
	<div>
		<input type="range" bind:value={duration} max={2000} step={100} />
		{duration}ms
	</div>

	<Button
		use={[[longpress, duration]]}
		on:longpress={() => (pressed = true)}
		on:mouseenter={() => (pressed = false)}
	>
		Press and hold
	</Button>

	{#if pressed}
		<p>Congratulations, you pressed and held for {duration} ms</p>
	{/if}
</Stack>
