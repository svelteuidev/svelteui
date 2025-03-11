<script lang="ts">
	import { onMount } from 'svelte';

	import { Box } from '../Box';
	import useStyles from './MediaQuery.styles';
	import type { MediaQueryProps } from './MediaQuery';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		smallerThan = undefined,
		largerThan = undefined,
		styles = undefined,
		query = undefined,
		children
	}: MediaQueryProps = $props();

	let { cx, classes, getStyles } = $derived(
		useStyles({ query, styles, largerThan, smallerThan }, { name: 'MediaQuery' })
	);

	function styleChildElement() {
		element.children[0].classList.add(getStyles().selector);
	}

	onMount(styleChildElement);
</script>

<Box {use} bind:element class={cx(className, classes.root, getStyles({ css: override }))}>
	{@render children?.()}
</Box>
