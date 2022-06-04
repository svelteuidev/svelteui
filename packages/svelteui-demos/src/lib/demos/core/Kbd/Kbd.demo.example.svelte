<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Kbd, TextInput } from '@svelteuidev/core';
    import { MagnifyingGlass } from 'radix-icons-svelte';
<\/script>

<TextInput
    placeholder="Search"
    icon={MagnifyingGlass}
    rightSectionWidth={90}
    override={{ '&. rightSection': { pointerEvents: 'none' }}}
>
    <svelte:fragment slot='rightSection'>
        <Kbd>Ctrl</Kbd>
        <Box root='span' css={{m: '0 5px'}}>+</Box>
        <Kbd>K</Kbd>
    </svelte:fragment>
</TextInput>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Kbd, TextInput, Box } from '@svelteuidev/core';
	import { MagnifyingGlass } from 'radix-icons-svelte';
</script>

<TextInput
	placeholder="Search"
	icon={MagnifyingGlass}
	rightSectionWidth={90}
	override={{ '&. rightSection': { pointerEvents: 'none' } }}
>
	<svelte:fragment slot="rightSection">
		<Kbd>Ctrl</Kbd>
		<Box root="span" css={{ m: '0 5px' }}>+</Box>
		<Kbd>K</Kbd>
	</svelte:fragment>
</TextInput>
