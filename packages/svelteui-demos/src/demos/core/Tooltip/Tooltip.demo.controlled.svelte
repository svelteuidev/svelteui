<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Button, Tooltip } from '@svelteuidev/core';

  let opened = $state(false);
<\/script>

<Tooltip {opened} labelComponent='Hello'>
    <Button onclick={() => (opened = !opened)}>Click here</Button>
</Tooltip>
`;

	export const type: CodeDemoType['type'] = 'demo';
	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Center, Tooltip } from '@svelteuidev/core';

	let opened = $state(false);
</script>

<Center>
	<Tooltip {opened} labelComponent="Hello">
		<Button onclick={() => (opened = !opened)}>Click here</Button>
	</Tooltip>
</Center>
