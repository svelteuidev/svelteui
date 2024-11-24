<script lang="ts">
	import { onMount } from 'svelte';
	import { Box } from '../Box';
	import useStyles from './MediaQuery.styles';
	import type { MediaQueryProps as $$MediaQueryProps } from './MediaQuery';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		smallerThan?: $$Props['smallerThan'];
		largerThan?: $$Props['largerThan'];
		styles?: $$Props['styles'];
		query?: $$Props['query'];
		children?: import('svelte').Snippet;
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		smallerThan = undefined,
		largerThan = undefined,
		styles = undefined,
		query = undefined,
		children
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles(
		{ query, styles, largerThan, smallerThan },
		{ name: 'MediaQuery' }
	));

	function styleChildElement() {
		element.children[0].classList.add(getStyles().selector);
	}

	onMount(styleChildElement);
</script>

<Box {use} bind:element class={cx(className, classes.root, getStyles({ css: override }))}>
	{@render children?.()}
</Box>
