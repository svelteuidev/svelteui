<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Button, Tooltip } from '@svelteuidev/core';
<\/script>

<Tooltip
    wrapLines
    width={220}
    withArrow
    transitionDuration={200}
    labelComponent='Use this button to see the tooltip multiline behavior so that we can convince you to use this library.'
>
    <Button>Multiline tooltip</Button>
</Tooltip>
`;

	export const type: CodeDemoType['type'] = 'demo';
	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Center, Tooltip } from '@svelteuidev/core';
</script>

<Center>
	<Tooltip
		wrapLines
		width={220}
		withArrow
		transitionDuration={200}
		labelComponent="Use this button to see the tooltip multiline behavior so that we can convince you to use this library."
	>
		<Button>Multiline tooltip</Button>
	</Tooltip>
</Center>
