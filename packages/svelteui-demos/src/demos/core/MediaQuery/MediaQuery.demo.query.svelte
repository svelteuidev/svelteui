<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Box, Group, MediaQuery, useSvelteUITheme } from '@svelteuidev/core';

	const theme = useSvelteUITheme();

	const highlight = {
		backgroundColor: theme.colors.blue50.value,
		border: \`1px solid $\{theme.colors.blue300.value}\`
	};

	const boxStyles = {
		borderRadius: 3,
		padding: '3px 5px',
		border: '1px solid transparent'
	};
<\/script>

<Group direction="column" spacing={5}>
	<MediaQuery largerThan="lg" styles={highlight}>
		<Box css={boxStyles}>- larger than lg</Box>
	</MediaQuery>
	<MediaQuery smallerThan="lg" styles={highlight}>
		<Box css={boxStyles}>- Smaller than lg</Box>
	</MediaQuery>
	<MediaQuery smallerThan="xl" largerThan="sm" styles={highlight}>
		<Box css={boxStyles}>- Smaller than xl, larger than sm</Box>
	</MediaQuery>
	<MediaQuery smallerThan={1500} largerThan={800} styles={highlight}>
		<Box css={boxStyles}>- Smaller than 1500px, larger than 800px</Box>
	</MediaQuery>
</Group>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Box, Group, MediaQuery, useSvelteUITheme } from '@svelteuidev/core';

	const theme = useSvelteUITheme();

	const highlight = {
		backgroundColor: theme.colors.blue50.value,
		border: `1px solid ${theme.colors.blue300.value}`
	};

	const boxStyles = {
		borderRadius: 3,
		padding: '3px 5px',
		border: '1px solid transparent'
	};
</script>

<Group direction="column" spacing={5}>
	<MediaQuery largerThan="lg" styles={highlight}>
		<Box css={boxStyles}>- larger than lg</Box>
	</MediaQuery>
	<MediaQuery smallerThan="lg" styles={highlight}>
		<Box css={boxStyles}>- Smaller than lg</Box>
	</MediaQuery>
	<MediaQuery smallerThan="xl" largerThan="sm" styles={highlight}>
		<Box css={boxStyles}>- Smaller than xl, larger than sm</Box>
	</MediaQuery>
	<MediaQuery smallerThan={1500} largerThan={800} styles={highlight}>
		<Box css={boxStyles}>- Smaller than 1500px, larger than 800px</Box>
	</MediaQuery>
</Group>
