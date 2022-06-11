<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code =
`<script>
	import { Switch } from '@svelteuidev/core';
<\/script>

<Switch size='sm' onLabel="ON" offLabel="OFF" />
<Switch size='md' onLabel="ON" offLabel="OFF" />
<Switch size='lg' onLabel="ON" offLabel="OFF" />
<Switch size='xl' onLabel="ON" offLabel="OFF" />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Group, Switch } from '@svelteuidev/core';
</script>

<Group position='center'>
    <Switch size='sm' onLabel="ON" offLabel="OFF" />
    <Switch size='md' onLabel="ON" offLabel="OFF" />
    <Switch size='lg' onLabel="ON" offLabel="OFF" />
    <Switch size='xl' onLabel="ON" offLabel="OFF" />
</Group>