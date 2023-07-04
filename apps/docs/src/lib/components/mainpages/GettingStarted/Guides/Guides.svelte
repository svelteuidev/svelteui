<script>
	import { UnstyledButton } from '@svelteuidev/core';
	import useStyles from './Guides.styles';

	export let title = 'title';
	export let icon = undefined;
	export let className = '';
	export let active = false;

	$: ({ cx, classes, getStyles } = useStyles());
</script>

<UnstyledButton on:click class={`${cx(className, getStyles(), { active })} guides`}>
	<svelte:component this={icon || null} />
	<p class={classes.title}>{title}</p>
</UnstyledButton>
