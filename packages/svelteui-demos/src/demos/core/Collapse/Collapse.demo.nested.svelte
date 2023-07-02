<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Button, Collapse, Paper } from '@svelteuidev/core';

  let open = false;
  let openInside = false;
<\/script>

<Button
  on:click={() => {
    open = !open;
  }}>Toggle collapse</Button
>
<Collapse {open}>
  <Paper>
    Please click below to toggle a nested collapse!
    <Button
      on:click={() => {
        openInside = !openInside;
      }}>Toggle nested collapse</Button
    >

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

	let open = false;
	let openInside = false;
</script>

<Stack align="center">
	<Button
		on:click={() => {
			open = !open;
		}}>Toggle collapse</Button
	>

	<Collapse {open}>
		<Paper>
			Please click below to toggle a nested collapse!
			<Button
				on:click={() => {
					openInside = !openInside;
				}}>Toggle nested collapse</Button
			>

			<Collapse open={openInside}>
				<Paper>This is a very hidden text, sshhhh!</Paper>
			</Collapse>
		</Paper>
	</Collapse>

	<div>Footer text</div>
</Stack>
