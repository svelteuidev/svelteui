<script lang="ts">
	import { onMount } from 'svelte';
	import { Box } from '../Box';
	import useStyles from './MediaQuery.styles';
	import type { MediaQueryProps as $$MediaQueryProps } from './MediaQuery';

	interface $$Props extends $$MediaQueryProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		smallerThan: $$Props['smallerThan'] = undefined,
		largerThan: $$Props['largerThan'] = undefined,
		styles: $$Props['styles'] = undefined,
		query: $$Props['query'] = undefined;
	export { className as class };

	$: ({ cx, classes, getStyles } = useStyles(
		{ query, styles, largerThan, smallerThan },
		{ name: 'MediaQuery' }
	));

	function styleChildElement() {
		element.children[0].classList.add(getStyles().selector);
	}

	onMount(styleChildElement);
</script>

<Box {use} bind:element class={cx(className, classes.root, getStyles({ css: override }))}>
	<slot />
</Box>
