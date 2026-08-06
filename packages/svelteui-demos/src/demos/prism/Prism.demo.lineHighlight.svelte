<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const demoCode = `
    <script>
        import { Button } from '@svelteuidev/core'
    <\/script>

    <Button>Hello</Button>
    `;

	const code = `
    <script>
        import { Prism } from '@svelteuidev/prism'

        const demoCode = \`
        <script>
            import { Button } from '@svelteuidev/core'
        <\/script>

        <Button>Hello</Button>
        \`
    <\/script>

    <Prism lineNumbers highlightLines='3-4' language='svelte' code={demoCode} />
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Box } from '@svelteuidev/core';
	import { Prism } from '@svelteuidev/prism';
</script>

<Box css={{ pre: { bc: '$gray50' }, 'pre code': { color: '$gray900' } }}>
	<Prism lineNumbers highlightLines="3-4" language="svelte" code={demoCode} />
</Box>
