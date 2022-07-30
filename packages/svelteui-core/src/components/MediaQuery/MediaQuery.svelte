<script lang="ts">
	import useStyles from './MediaQuery.styles';
	import { Box } from '../Box';
	import { onMount } from 'svelte';
	import type { MediaQueryProps as $$MediaQueryProps } from './MediaQuery.styles';

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

	$: ({ cx, getStyles } = useStyles({ query, styles, largerThan, smallerThan }));

	function styleChildElement() {
		element.children[0].classList.add(getStyles().selector);
	}

	onMount(styleChildElement);
</script>

<Box {use} bind:element class={cx(className, getStyles({ css: override }))}>
	<slot />
</Box>
