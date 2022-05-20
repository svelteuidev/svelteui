<script lang="ts" context="module">
	/* eslint-disable no-useless-escape */
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Button, Group } from '@svelteuidev/core';
<\/script>

<Group position="center">
  <Button variant="filled">filled</Button>
  <Button variant="light">light</Button>
  <Button variant="outline">outline</Button>
  <Button variant="default">default</Button>
  <Button variant="white">white</Button>
  <Button variant="gradient">gradient</Button>
  <Button variant="subtle">subtle</Button>
</Group>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Group } from '@svelteuidev/core';
</script>

<Group position="center">
	<Button variant="filled">filled</Button>
	<Button variant="light">light</Button>
	<Button variant="outline">outline</Button>
	<Button variant="default">default</Button>
	<Button variant="white">white</Button>
	<Button variant="gradient">gradient</Button>
	<Button variant="subtle">subtle</Button>
</Group>
