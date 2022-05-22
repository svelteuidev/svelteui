<script lang="ts" context="module">
	import type { CodeDemoType } from '$lib/types';

	export const type: CodeDemoType['type'] = 'demo';
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
