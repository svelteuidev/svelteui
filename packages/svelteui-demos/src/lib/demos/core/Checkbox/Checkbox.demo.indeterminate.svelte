<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = 
`<script>
    import { Checkbox } from '@svelteuidev/core';
<\/script>

<Checkbox checked size='xs' label='xs checkbox' />
<Checkbox checked size='sm' label='sm checkbox' />
<Checkbox checked size='md' label='md checkbox' />
<Checkbox checked size='lg' label='lg checkbox' />
<Checkbox checked size='xl' label='xl checkbox' />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Checkbox, Stack } from '@svelteuidev/core';

    let items = [
        { label: 'Receive email notifications', value: false },
        { label: 'Receive sms notifications', value: false },
        { label: 'Receive push notifications', value: false }
    ]
    $: globalValue = items.every(i => i.value);
</script>

<Stack position="center">
	<Checkbox label='Receive all notifications' indeterminate={!globalValue} checked={globalValue} />
    <Stack>
        {#each items as item, index}
            <Checkbox bind:checked={items[index].value} label={item.label} />
        {/each}
    </Stack>
</Stack>
