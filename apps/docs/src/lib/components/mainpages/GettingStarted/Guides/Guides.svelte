<script lang="ts">
	import { UnstyledButton } from '@svelteuidev/core';
	import useStyles from './Guides.styles';

	interface Props {
		title?: string;
		icon?: any;
		className?: string;
		active?: boolean;
		onclick?: () => void;
	}

	let { title = 'title', icon = undefined, className = '', active = false }: Props = $props();

	let { cx, classes, getStyles } = $derived(useStyles());
</script>

<UnstyledButton {onclick} class={`${cx(className, getStyles(), { active })} guides`}>
	{@const SvelteComponent = icon || null}
	<SvelteComponent />
	<p class={classes.title}>{title}</p>
</UnstyledButton>
