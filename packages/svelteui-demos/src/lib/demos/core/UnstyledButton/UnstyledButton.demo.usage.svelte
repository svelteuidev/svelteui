<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { UnstyledButton, ThemeIcon, Text, Group } from '@svelteuidev/core';
<\/script>

<Group position="center">
	<UnstyledButton aria-label="Open user menu" onClick={() => {}}>
		<Group>
			<ThemeIcon size={40} color="blue" variant="outline">BH</ThemeIcon>
			<div>
				<Text>Bob Handsome</Text>
				<Text size="xs" color="dimmed">bob@handsome.inc</Text>
			</div>
		</Group>
	</UnstyledButton>
</Group>
`;

	export const type: CodeDemoType['type'] = 'demo';
	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Text, Group, UnstyledButton, ThemeIcon, Kbd } from '@svelteuidev/core';
	import { useOs } from '@svelteuidev/composables';

	const os = useOs();
	const isDesktop = os === 'macos' || os === 'windows' || os === 'linux' ? true : false;
</script>

<Group position="center">
	<UnstyledButton aria-label="Open user menu" onClick={() => {}}>
		<Group>
			<ThemeIcon size={40} color="blue" variant="outline">BH</ThemeIcon>
			<div>
				<Text>Bob Handsome</Text>
				<Text size="xs" color="dimmed">bob@handsome.inc</Text>
			</div>
		</Group>
	</UnstyledButton>
</Group>
{#if isDesktop}
	<Text override={{ mt: '$10' }} align="center" weight="bold" tracking="tight">
		Try clicking <Kbd>tab</Kbd> to focus the button!
	</Text>
{/if}
