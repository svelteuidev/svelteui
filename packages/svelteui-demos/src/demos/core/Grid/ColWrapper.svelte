<script lang="ts">
	import { Box, Text, colorScheme, useSvelteUITheme } from '@svelteuidev/core';

	const { themeColor } = useSvelteUITheme().fn;
</script>

<Box
	css={{
		boxSizing: 'border-box',
		height: '100%',
		minHeight: 'inherit',
		backgroundColor: $colorScheme === 'dark' ? themeColor('dark', 4) : themeColor('blue', 0),
		padding: '$mdPX'
	}}
>
	<Text color={$colorScheme === 'dark' ? 'gray' : 'blue'} size="xl" weight={700} align="center">
		<slot />
	</Text>
</Box>
