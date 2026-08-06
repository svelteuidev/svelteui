<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Button } from '@svelteuidev/core';

  const colors = ['dark', 'gray', 'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'];
<\/script>

{#each colors as color}
	<Button {color}>{color}600</Button>
{/each}
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, SimpleGrid } from '@svelteuidev/core';

	const colors = [
		'dark',
		'gray',
		'red',
		'pink',
		'grape',
		'violet',
		'indigo',
		'blue',
		'cyan',
		'teal',
		'green',
		'lime',
		'yellow',
		'orange'
	];
</script>

<SimpleGrid class="grid" cols={3}>
	{#each colors as color}
		<Button {color}>{color}600</Button>
	{/each}
</SimpleGrid>
