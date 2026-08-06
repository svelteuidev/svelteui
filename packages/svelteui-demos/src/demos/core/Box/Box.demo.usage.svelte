<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Box } from '@svelteuidev/core';
<\/script>

<Box
    css={{
        backgroundColor: '$gray50',
        textAlign: 'center',
        padding: '$20',
        borderRadius: '$md',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: '$gray100',
        },
    }}
>
    Box lets you add inline styles with the css prop
</Box>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Box } from '@svelteuidev/core';
</script>

<Box
	css={{
		backgroundColor: '$gray50',
		textAlign: 'center',
		padding: '$20',
		borderRadius: '$md',
		cursor: 'pointer',

		'&:hover': {
			backgroundColor: '$gray100'
		}
	}}
>
	Box lets you add inline styles with the css prop
</Box>
