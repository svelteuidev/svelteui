<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
    <script>
	import { createStyles } from '@svelteuidev/core';

	let active = 0;

	const useStyles = createStyles((theme) => ({
		root: {
			[\`$\{theme.dark} &\`]: {
				bc: theme.fn.themeColor('dark', 5),
				color: 'white'
			},
			backgroundColor: theme.fn.themeColor('gray', 1),
			border: 0,
			color: 'black',
			borderRadius: theme.radii.md.value,
			padding: \`$\{+theme.space.sm.value}px $\{+theme.space.lg.value}px\`,
			cursor: 'pointer',
			margin: +theme.space.md.value,
			'&.active': {
				backgroundColor: theme.fn.themeColor('blue', 6),
				color: 'white'
			}
		}
	}));

	$: ({ cx, getStyles } = useStyles());
<\/script>

<button
    class={cx(getStyles(), { active: active === 0 })}
    on:click={() => (active = 0)}
    type="button"
>
    First
</button>
<button
    class={cx(getStyles(), { active: active === 1 })}
    on:click={() => (active = 1)}
    type="button"
>
    Second
</button>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { createStyles, Group } from '@svelteuidev/core';

	let active = 0;

	const useStyles = createStyles((theme) => ({
		root: {
			[`${theme.dark} &`]: {
				bc: theme.fn.themeColor('dark', 5),
				color: 'white'
			},
			backgroundColor: theme.fn.themeColor('gray', 1),
			border: 0,
			color: 'black',
			borderRadius: theme.radii.md.value,
			padding: `${+theme.space.sm.value}px ${+theme.space.lg.value}px`,
			cursor: 'pointer',
			margin: +theme.space.md.value,
			'&.active': {
				backgroundColor: theme.fn.themeColor('blue', 6),
				color: 'white'
			}
		}
	}));

	$: ({ cx, getStyles } = useStyles());
</script>

<Group position="center">
	<button
		class={cx(getStyles(), { active: active === 0 })}
		on:click={() => (active = 0)}
		type="button"
	>
		First
	</button>
	<button
		class={cx(getStyles(), { active: active === 1 })}
		on:click={() => (active = 1)}
		type="button"
	>
		Second
	</button>
</Group>
