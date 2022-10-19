<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Center, Stack, Text, Button } from '@svelteuidev/core';
	import { useEyeDropper } from '@svelteuidev/composables';
	import { EyeOpen } from 'radix-icons-svelte';

	const { isSupported, sRGBHex, open } = useEyeDropper({ initialValue: '#000000' });
<\/script>

<Center css={{ width: 400, m: 'auto' }}>
	<Stack align="center">
		<Text>isSupported: {isSupported}</Text>
		<Text>
			sRGBHex: <Text inherit override={{ color: \`$\{$sRGBHex} !important\` }}>{$sRGBHex}</Text>
		</Text>
		<Button variant="outline" on:click={() => open()}>
			<EyeOpen slot="leftIcon" />
			Open Eye Dropper
		</Button>
	</Stack>
</Center>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Center, Stack, Text, Button } from '@svelteuidev/core';
	import { useEyeDropper } from '@svelteuidev/composables';
	import { EyeOpen } from 'radix-icons-svelte';

	const { isSupported, sRGBHex, open } = useEyeDropper({ initialValue: '#000000' });
</script>

<Center css={{ width: 400, m: 'auto' }}>
	<Stack align="center">
		<Text>isSupported: {isSupported}</Text>
		<Text>
			sRGBHex: <Text inherit override={{ color: `${$sRGBHex} !important` }}>{$sRGBHex}</Text>
		</Text>
		<Button variant="outline" on:click={() => open()}>
			<EyeOpen slot="leftIcon" />
			Open Eye Dropper
		</Button>
	</Stack>
</Center>
