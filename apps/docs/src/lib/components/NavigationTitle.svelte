<script lang="ts">
	import { UnstyledButton, createStyles } from '@svelteuidev/core';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

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

	let { classes } = $derived(useStyles());
</script>

<UnstyledButton class={classes.root} on:click>
	<span class={classes.title}>
		{#if children}
			{@render children()}
		{:else}
			Title Here
		{/if}
	</span>
</UnstyledButton>
