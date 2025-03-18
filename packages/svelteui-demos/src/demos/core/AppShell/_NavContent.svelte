<script lang="ts">
	import { Box, Anchor, Text, Stack } from '@svelteuidev/core';

	interface Props {
		isDark: boolean;
	}

	let { isDark }: Props = $props();
</script>

<Stack>
	<Box css={{ bc: isDark ? '$blue400' : '$blue50', p: '$mdPX', br: '$lg', userSelect: 'none' }}>
		<Text align="center">Navbar</Text>
	</Box>
	<Anchor href="/">Home Page</Anchor>
	<Anchor href="/test">Test Page</Anchor>
</Stack>
