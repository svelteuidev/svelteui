<script>
	import { UnstyledButton, createStyles } from '@svelteuidev/core';

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
	<span class={classes.title}>
		<slot>Title Here</slot>
	</span>
</UnstyledButton>
