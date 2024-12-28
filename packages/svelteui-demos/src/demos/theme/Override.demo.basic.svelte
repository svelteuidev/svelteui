<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Button } from '@svelteuidev/core';
  import { GithubLogo } from 'radix-icons-svelte';

  const PrimaryButton = {
    $$blue: '#228be6',
    boxShadow: '0 2px 14px $$blue',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      boxShadow: '0 4px 20px $$blue'
    }
  };
<\/script>

<Button override={PrimaryButton}>
	<GithubLogo slot="leftIcon" size={16} /> I love open source!
</Button>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Center } from '@svelteuidev/core';
	import { GithubLogo } from 'radix-icons-svelte';

	const PrimaryButton = {
		$$blue: '#228be6',
		boxShadow: '0 2px 14px $$blue',
		transition: 'all 0.2s ease-in-out',
		'&:hover': {
			boxShadow: '0 4px 20px $$blue'
		}
	};
</script>

<Center>
	<Button override={PrimaryButton}>
		{#snippet leftIcon()}
				<GithubLogo  size={16} />
			{/snippet} I love open source!
	</Button>
</Center>
