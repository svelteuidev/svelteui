<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
  import { ActionIcon } from '@svelteuidev/core';
  import { GithubLogo } from 'radix-icons-svelte';
<\/script>

<ActionIcon color='blue' variant='hover'><GithubLogo size={16} /></ActionIcon>
<ActionIcon color='blue' variant='filled'><GithubLogo size={16} /></ActionIcon>
<ActionIcon color='blue' variant='outline'><GithubLogo size={16} /></ActionIcon>
<ActionIcon color='blue' variant='light'><GithubLogo size={16} /></ActionIcon>
<ActionIcon color='blue' variant='default'><GithubLogo size={16} /></ActionIcon>
<ActionIcon color='blue' variant='transparent'><GithubLogo size={16} /></ActionIcon>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		toggle: true
	};
</script>

<script lang="ts">
	import type { ActionIconProps } from '@svelteuidev/core';
	import { ActionIcon, Group } from '@svelteuidev/core';
	import { GithubLogo } from 'radix-icons-svelte';

	let variants: ActionIconProps['variant'][] = [
		'hover',
		'filled',
		'outline',
		'light',
		'default',
		'transparent'
	];
</script>

<Group position="center">
	{#each variants as variant}
		<ActionIcon {variant} color="blue"><GithubLogo size={16} /></ActionIcon>
	{/each}
</Group>
