<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

    const code = `
<script>
  import { Button, Tooltip } from '@svelteuidev/core';

  let opened = false;
<\/script>

<Tooltip {opened} label='Hello'>
    <Button on:click={() => (opened = !opened)}>Click here</Button>
</Tooltip>
`;

    export const type: CodeDemoType['type'] = 'demo';
	export const configuration: CodeDemoConfiguration = {
        code
    };
</script>

<script lang="ts">
	import { Button, Center, Tooltip } from '@svelteuidev/core';
    
    let opened = false;
</script>

<Center>
    <Tooltip {opened} label='Hello'>
        <Button on:click={() => (opened = !opened)}>Click here</Button>
    </Tooltip>
</Center>

