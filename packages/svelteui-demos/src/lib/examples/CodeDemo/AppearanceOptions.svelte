<script lang="ts" context="module">
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
		code,
		previewBackground: {
			light: '#f8f9fa',
			dark: '#141517'
		},
		previewMaxWidth: 500,
		spacing: false,
		toggle: true
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
