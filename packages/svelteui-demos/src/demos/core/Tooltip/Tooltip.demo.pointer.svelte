<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Button, Tooltip } from '@svelteuidev/core';

  let opened = false;
<\/script>

<Tooltip
  opened={opened}
  allowPointerEvents
  withArrow
  wrapLines
  transition="rotate-left"
  transitionDuration={250}
  width={220}
  gutter={5}
>
  	{#snippet label()}
		<div style="display: flex;">
			<Text size="xs" color="white">
				Use this button to save this information in your profile, after that you will be able to
				access it any time and share it via email.
			</Text>
			<ActionIcon size="xs" color="white" onclick={() => (opened = false)}>x</ActionIcon>
		</div>
	{/snippet}
  <Button onclick={() => (opened = false)}>Save to profile</Button>
</Tooltip>

{#if !opened}
  <Button variant="light" color="gray" onclick={() => (opened = true)}>
    Reopen tooltip
  </Button>
{/if}
`;

	export const type: CodeDemoType['type'] = 'demo';
	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { ActionIcon, Button, Center, Text, Tooltip } from '@svelteuidev/core';

	let opened = $state(true);
</script>

<Center>
	<Tooltip
		{opened}
		allowPointerEvents
		withArrow
		wrapLines
		transitionDuration={250}
		width={220}
		gutter={5}
	>
		{#snippet label()}
			<div style="display: flex;">
				<Text size="xs" color="white">
					Use this button to save this information in your profile, after that you will be able to
					access it any time and share it via email.
				</Text>
				<ActionIcon size="xs" color="white" onclick={() => (opened = false)}>x</ActionIcon>
			</div>
		{/snippet}
		<Button onclick={() => (opened = false)}>Save to profile</Button>
	</Tooltip>

	{#if !opened}
		<Button variant="default" override={{ marginLeft: '10px' }} onclick={() => (opened = true)}>
			Reopen tooltip
		</Button>
	{/if}
</Center>
