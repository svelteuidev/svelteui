<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
  import { Badge, CloseButton } from '@svelteuidev/core';
<\/script>

<Badge>
    Badge with right section
    <svelte:fragment slot='rightSection'>
        <CloseButton size='xs' iconSize='xs' color='blue' variant='transparent' />
    </svelte:fragment>
</Badge>

<Badge>
    Badge with left section
    <svelte:fragment slot='leftSection'>
        <CloseButton size='xs' iconSize='xs' color='blue' variant='transparent' />
    </svelte:fragment>
</Badge>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		toggle: true
	};
</script>

<script lang="ts">
	import { Badge, CloseButton, Group } from '@svelteuidev/core';
</script>

<Group position="center">
	<Badge>
		Badge with right section
		{#snippet rightSection()}
			
				<CloseButton size="xs" iconSize="xs" color="blue" variant="transparent" />
			
			{/snippet}
	</Badge>

	<Badge>
		Badge with left section
		{#snippet leftSection()}
			
				<CloseButton size="xs" iconSize="xs" color="blue" variant="transparent" />
			
			{/snippet}
	</Badge>
</Group>
