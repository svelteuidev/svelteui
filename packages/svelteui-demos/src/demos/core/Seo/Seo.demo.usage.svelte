<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Seo } from '@svelteuidev/core';
<\/script>

<Seo
    title='Seo Demo'
    titleTemplate="%t% | SvelteUI"
 />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Seo, Text } from '@svelteuidev/core';
</script>

<Text align="center">Look at the webpage title</Text>
<Seo title="Seo Demo" titleTemplate="%t% | SvelteUI" />
