<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script lang="ts">
	import { createStyles } from '@svelteuidev/core';

	interface ButtonProps {
		color: 'blue' | 'violet';
		radius: number;
	}

	let color: ButtonProps['color'] = 'blue';
	let radius: ButtonProps['radius'] = 50;

	const useStyles = createStyles((theme, { color, radius }: ButtonProps) => ({
		root: {
			color: 'white',
			backgroundColor: theme.fn.themeColor(color, 6),
			borderRadius: radius,
			padding: '$mdPX',
			margin: '$mdPX',
			border: 0,
			cursor: 'pointer'
		}
	}));

	// This is reactive destructuring
	$: ({ getStyles } = useStyles({ color, radius }));
<\/script>

<button type="button" class={getStyles()}>
	{color} button with {radius}px radius
</button>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { createStyles, Group } from '@svelteuidev/core';

	interface ButtonProps {
		color: 'blue' | 'violet';
		radius: number;
	}

	let color: ButtonProps['color'] = 'blue';
	let radius: ButtonProps['radius'] = 50;

	const useStyles = createStyles((theme, { color, radius }: ButtonProps) => ({
		root: {
			color: 'white',
			backgroundColor: theme.fn.themeColor(color, 6),
			borderRadius: radius,
			padding: '$mdPX',
			margin: '$mdPX',
			border: 0,
			cursor: 'pointer'
		}
	}));

	let { getStyles } = $derived(useStyles({ color, radius }));
</script>

<Group position="center">
	<button type="button" class={getStyles()}>
		{color} button with {radius}px radius
	</button>
</Group>
