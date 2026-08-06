<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Prism } from '@svelteuidev/prism';
<\/script>

<Prism language='svelte' code={prismExampleCode} />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Box } from '@svelteuidev/core';
	import { Prism } from '@svelteuidev/prism';

	const prismExampleCode = `
    <script>
        import { Button } from '@svelteuidev/core';
    <\/script>

    <Button>Hello<\/Button>
    `;
</script>

<Box css={{ pre: { bc: '$gray50' }, 'pre code': { color: '$gray900' } }}>
	<Prism language="svelte" code={prismExampleCode} />
</Box>
