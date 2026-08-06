<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Button, Paper } from '@svelteuidev/core';
    import { clickoutside } from '@svelteuidev/composables';

    let open = $state(true);
<\/script>

<div use:clickoutside={{ enabled: open, callback: () => open = false }}>
    <Button onclick={() => open = true}>Open Modal</Button>
    {#if open}
        <Paper shadow='sm'>
            This is a modal, click anywhere to close
        </Paper>
    {/if}
</div>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Button, Center, Group, Paper, useSvelteUITheme } from '@svelteuidev/core';
	import { clickoutside } from '@svelteuidev/composables';

	let open = $state(false);
	let theme = useSvelteUITheme();
</script>

<Center>
	<div
		style="position: relative;"
		use:clickoutside={{ enabled: open, callback: () => (open = false) }}
	>
		<Group position="center">
			<Button onclick={() => (open = true)}>Open Modal</Button>
		</Group>
		{#if open}
			<Paper
				shadow="sm"
				override={{
					zIndex: 1,
					width: 300,
					height: 60,
					position: 'absolute',
					top: 0,
					left: 'calc(50% - 150px)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: theme.colors.white.value,
					darkMode: {
						color: theme.fn.themeColor('dark', 6)
					}
				}}
			>
				This is a modal, click anywhere to close
			</Paper>
		{/if}
	</div>
</Center>
