<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Text, Group } from '@svelteuidev/core';
	import { useBrowserContext } from '@svelteuidev/composables';
	const location = useBrowserContext();

	$: ({
		trigger,
		hash,
		host,
		hostname,
		href,
		length,
		origin,
		pathname,
		port,
		protocol,
		search,
		state
	} = $location);
<\/script>

<Group direction="column" position="center">
	<Text>Trigger: {trigger}</Text>
	<Text>Hash: {hash}</Text>
	<Text>Host: {host}</Text>
	<Text>Hostname: {hostname}</Text>
	<Text>Href: {href}</Text>
	<Text>Length: {length}</Text>
	<Text>Origin: {origin}</Text>
	<Text>Pathname: {pathname}</Text>
	<Text>Port: {port}</Text>
	<Text>Protocol: {protocol}</Text>
	<Text>Search: {search}</Text>
	<Text>State: {state}</Text>
</Group>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Text, Group } from '@svelteuidev/core';
	import { useBrowserContext } from '@svelteuidev/composables';
	const location = useBrowserContext();

	$: ({
		trigger,
		hash,
		host,
		hostname,
		href,
		length,
		origin,
		pathname,
		port,
		protocol,
		search,
		state
	} = $location);
</script>

<Group direction="column" position="center">
	<Text>Trigger: {trigger}</Text>
	<Text>Hash: {hash}</Text>
	<Text>Host: {host}</Text>
	<Text>Hostname: {hostname}</Text>
	<Text>Href: {href}</Text>
	<Text>Length: {length}</Text>
	<Text>Origin: {origin}</Text>
	<Text>Pathname: {pathname}</Text>
	<Text>Port: {port}</Text>
	<Text>Protocol: {protocol}</Text>
	<Text>Search: {search}</Text>
	<Text>State: {state}</Text>
</Group>
