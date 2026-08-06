<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Button, Input, InputWrapper } from '@svelteuidev/core';
    import { focus } from '@svelteuidev/composables';

    let name = $state('world');
    let editing = $state(false);
    function toggleEdit() {
        editing = !editing;
    }
<\/script>

<p>Name: {name}</p>
{#if editing}
    <InputWrapper label='Name'>
        <Input use={[[focus]]} bind:value={name} />
    </InputWrapper>
{/if}
<Button onclick={toggleEdit}>{editing ? 'Confirm' : 'Edit'}</Button>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Button, Input, InputWrapper, Stack } from '@svelteuidev/core';
	import { focus } from '@svelteuidev/composables';

	let name = $state('world');
	let editing = $state(false);
	function toggleEdit() {
		editing = !editing;
	}
</script>

<Stack align="center">
	<p>Name: {name}</p>
	{#if editing}
		<InputWrapper label="Name">
			<Input use={[focus]} bind:value={name} />
		</InputWrapper>
	{/if}
	<Button onclick={toggleEdit}>{editing ? 'Confirm' : 'Edit'}</Button>
</Stack>
