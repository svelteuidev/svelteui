<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Menu } from '@svelteuidev/core';
	import { ExternalLink } from 'radix-icons-svelte';
<\/script>

<Menu>
    <Menu.Item root='a' href='https://svelteui.dev'>SvelteUI Website</Menu.Item>
    <Menu.Item
        icon={ExternalLink}
        root='a'
        href='https://svelteui.dev'
        target='_blank'
    >
        External Link
    </Menu.Item>
</Menu>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Menu } from '@svelteuidev/core';
	import { ExternalLink } from 'radix-icons-svelte';
</script>

<Center>
	<Menu>
		<Menu.Item root="a" href="https://svelteui.dev">SvelteUI Website</Menu.Item>
		<Menu.Item icon={ExternalLink} root="a" href="https://svelteui.dev" target="_blank">
			External Link
		</Menu.Item>
	</Menu>
</Center>
