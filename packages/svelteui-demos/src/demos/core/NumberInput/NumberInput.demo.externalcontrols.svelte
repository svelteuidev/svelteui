<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { NumberInput } from '@svelteuidev/core';

    let input;
<\/script>

<ActionIcon
    variant='default'
    onclick={() => input.decrement()}
>
    -
<\/ActionIcon>
<NumberInput
    bind:this={input}
    hideControls
    defaultValue={0}
    max={10}
    min={0}
    step={2}
\/>
<ActionIcon
    variant='default'
    onclick={() => input.increment()}
>
    +
<\/ActionIcon>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { ActionIcon, Group, NumberInput, Center } from '@svelteuidev/core';
	import type { NumberInputComponent } from '@svelteuidev/core';

	let input: NumberInputComponent = $state();
</script>

<Group position="center">
	<ActionIcon variant="default" onclick={() => input.decrement()}>-</ActionIcon>
	<Center inline override={{ width: '50px' }}>
		<NumberInput bind:this={input} hideControls defaultValue={0} max={10} min={0} step={2} />
	</Center>
	<ActionIcon variant="default" onclick={() => input.increment()}>+</ActionIcon>
</Group>
