<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Button } from '@svelteuidev/core';
    import { cssvariable } from '@svelteuidev/composables';

    let isRed = true;
    $: styleVars = {
        titleColor: isRed ? 'red' : 'blue'
    };
<\/script>

<div use:cssvariable={styleVars}>
    <!-- anything here will have access to var(--titleColor) -->
    <p>This text is normal</p>
    <p class="example">This text is using the variable</p>
</div>
<Button on:click={() => (isRed = !isRed)}>Click to switch colors</Button>

<style>
    .example {
        color: var(--titleColor);
    }
</style>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Button, Stack } from '@svelteuidev/core';
	import { cssvariable } from '@svelteuidev/composables';

    let isRed = true;
    $: styleVars = {
        titleColor: isRed ? 'red' : 'blue'
    };
</script>

<Stack align='center'>
    <div use:cssvariable={styleVars}>
        <!-- anything here will have access to var(--titleColor) -->
        <p>This text is normal</p>
        <p class="example">This text is using the variable</p>
    </div>
    <Button on:click={() => (isRed = !isRed)}>Click to switch colors</Button>
</Stack>

<style>
    .example {
        color: var(--titleColor);
    }
</style>