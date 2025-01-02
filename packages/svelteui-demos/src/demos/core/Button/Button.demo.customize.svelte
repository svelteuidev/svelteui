<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Button } from '@svelteuidev/core';

    const newStyles = {
        boxShadow: '0 2px 14px #228be6',
        transition: 'all 0.2s ease-in-out',
        color: 'white !important',
        textDecoration: 'none !important',
        '&:hover': {
        boxShadow: '0 4px 20px #228be6',
        },
    };
<\/script>

<Button override={{ bc: 'red', '&:hover': { bc: '$indigo400' } }} variant='outline'>Click Me</Button>
<Button override={newStyles}>
    {#snippet leftIcon()}
		<GithubLogo size={16} />
	{/snippet}
	I love open source!
</Button>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Group } from '@svelteuidev/core';
	import { GithubLogo } from 'radix-icons-svelte';

	const newStyles = {
		boxShadow: '0 2px 14px #228be6',
		transition: 'all 0.2s ease-in-out',
		color: 'white !important',
		textDecoration: 'none !important',
		'&:hover': {
			boxShadow: '0 4px 20px #228be6'
		}
	};
</script>

<Group position="center">
	<Button override={{ bc: 'red', '&:hover': { bc: '$indigo400' } }} variant="outline"
		>Click Me</Button
	>
	<Button override={newStyles}>
		{#snippet leftIcon()}
			<GithubLogo size={16} />
		{/snippet}
		I love open source!
	</Button>
</Group>
