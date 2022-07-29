<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Code, Text } from '@svelteuidev/core';
<\/script>

<Text root="a">This is a anchor now</Text>
<Text root="p">This is a paragraph</Text>
<Text root={Code}>This is a Code Component</Text>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Code, Text } from '@svelteuidev/core';
</script>

<Text root="a">This is a anchor now</Text>
<Text root="p">This is a paragraph</Text>
<Text root={Code}>This is a Code Component</Text>
