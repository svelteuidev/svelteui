<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Button } from '@svelteuidev/core';
<\/script>

<Button variant='gradient'>Default</Button>
<Button variant='gradient' gradient={{from: 'teal', to: 'green', deg: 105}}>
	Lime Green
</Button>
<Button variant='gradient' gradient={{from: 'teal', to: 'blue', deg: 60}}>
	Teal Blue
</Button>
<Button variant='gradient' gradient={{from: 'orange', to: 'red', deg: 45}}>
	Orange red
</Button>
<Button variant='gradient' gradient={{from: 'grape', to: 'pink', deg: 35}}>
	Grape Pink
</Button>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		canShowCode: false
	};
</script>

<script lang="ts">
	import { Button, Group } from '@svelteuidev/core';
</script>

<Group position="center">
	<Button variant="gradient">Default</Button>
	<Button variant="gradient" gradient={{ from: 'teal', to: 'green', deg: 105 }}>Lime Green</Button>
	<Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal Blue</Button>
	<Button variant="gradient" gradient={{ from: 'orange', to: 'red', deg: 45 }}>Orange red</Button>
	<Button variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>Grape Pink</Button>
</Group>
