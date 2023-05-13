<script>
	import ChevronDown from './svgs/ChevronDown.svelte';
	import { Space, UnstyledButton, createStyles } from '@svelteuidev/core';

	export let expanded = false;

	const useStyles = createStyles(() => ({
		root: {
			display: 'flex',
			alignItems: 'center'
		},
		title: {
			fontSize: 14,
			fontWeight: '$bold',
			textTransform: 'uppercase',
			letterSpacing: '$tight'
		}
	}));

	$: ({ classes } = useStyles());
</script>

<UnstyledButton class={classes.root} on:click>
	<ChevronDown {expanded} />
	<Space w="xs" />
	<span class={classes.title}>
		<slot>Title Here</slot>
	</span>
</UnstyledButton>
