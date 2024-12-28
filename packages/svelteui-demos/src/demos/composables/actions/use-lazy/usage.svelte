<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { lazy } from '@svelteuidev/composables';
<\/script>

{#each [...Array(15).keys()] as i}
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati ex totam laboriosam, culpa ipsa quis nostrum odio dolore aut eos numquam ratione quam maiores voluptates quas eius labore error?
	</p>
{/each}
<img use:lazy={{src: "https://images.unsplash.com/photo-1584441111639-2fe3005b4378"}} alt="" />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Stack } from '@svelteuidev/core';
	import { lazy } from '@svelteuidev/composables';
</script>

<Stack override={{ height: '300px', overflow: 'scroll', padding: '1rem' }}>
	{#each [...Array(15).keys()] as i}
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati ex totam
			laboriosam, culpa ipsa quis nostrum odio dolore aut eos numquam ratione quam maiores
			voluptates quas eius labore error?
		</p>
	{/each}
	<img use:lazy={{ src: 'https://images.unsplash.com/photo-1584441111639-2fe3005b4378' }} alt="" />
</Stack>
