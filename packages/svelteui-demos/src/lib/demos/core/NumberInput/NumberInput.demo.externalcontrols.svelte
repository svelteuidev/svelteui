<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { NumberInput } from '@svelteuidev/core';

    let input;
<\/script>

<ActionIcon
    variant='default'
    on:click={() => input.decrement()}
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
    override={{ width: '50px' }}
\/>
<ActionIcon
    variant='default'
    on:click={() => input.increment()}
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
	import { ActionIcon, Group, NumberInput } from '@svelteuidev/core';

    let input;
</script>

<Group position='center'>
    <ActionIcon
        variant='default'
        on:click={() => input.decrement()}
    >
        -
    </ActionIcon>
    <NumberInput
        bind:this={input}
        hideControls
        defaultValue={0}
        max={10}
        min={0}
        step={2}
        override={{ width: '50px' }}
    />
    <ActionIcon
        variant='default'
        on:click={() => input.increment()}
    >
        +
    </ActionIcon>
</Group>
