<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import SvelteMarkdown from 'svelte-markdown'
    import { TypographyProvider } from '@svelteuidev/core';

    const markdown = \`
    # This is a title
    \`
<\/script>

<TypographyProvider>
    <SvelteMarkdown source={markdown} />
</TypographyProvider>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>
