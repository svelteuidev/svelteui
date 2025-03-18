<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Button, Collapse, Paper } from '@svelteuidev/core';

  	let open = $state(false);
	let openInside = $state(false);
<\/script>

<Button
  onclick={() => {
    open = !open;
  }}
>
  Toggle collapse
</Button>
<Collapse {open}>
  <Paper>
    Please click below to toggle a nested collapse!
    <Button
      onclick={() => {
        openInside = !openInside;
      }}
	>
	  Toggle nested collapse
	</Button>

    <Collapse open={openInside}>
      <Paper>This is a very hidden text, sshhhh!</Paper>
    </Collapse>
  </Paper>
</Collapse>
<div>Footer text</div>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Collapse, Paper, Stack } from '@svelteuidev/core';

	let open = $state(false);
	let openInside = $state(false);
</script>

<Stack align="center">
	<Button
		onclick={() => {
			open = !open;
		}}
	>
		Toggle collapse
	</Button>

	<Collapse {open}>
		<Paper>
			Please click below to toggle a nested collapse!
			<Button
				onclick={() => {
					openInside = !openInside;
				}}
			>
				Toggle nested collapse
			</Button>

			<Collapse open={openInside}>
				<Paper>This is a very hidden text, sshhhh!</Paper>
			</Collapse>
		</Paper>
	</Collapse>

	<div>Footer text</div>
</Stack>
