<script>
	import useStyles from './Guides.styles';
	import { UnstyledButton } from '@svelteuidev/core';

	export let title = 'title';
	export let icon = undefined;
	export let className = '';
	export let active = {};

	$: ({ cx, classes, getStyles } = useStyles());
</script>

<UnstyledButton on:click class={cx(className, getStyles(active))}>
	<svelte:component this={icon || null} />
	<p class={classes.title}>{title}</p>
</UnstyledButton>
