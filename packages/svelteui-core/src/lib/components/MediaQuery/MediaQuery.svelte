<script lang="ts">
	import useStyles from './MediaQuery.styles';
	import { Box } from '../Box';
	import { onMount } from 'svelte';
	import type { MediaQueryProps as $$MediaQueryProps } from './MediaQuery.styles';

	export let use: $$MediaQueryProps['use'] = [],
		element: $$MediaQueryProps['element'] = undefined,
		className: $$MediaQueryProps['className'] = '',
		override: $$MediaQueryProps['override'] = {},
		smallerThan: $$MediaQueryProps['smallerThan'] = undefined,
		largerThan: $$MediaQueryProps['largerThan'] = undefined,
		styles: $$MediaQueryProps['styles'] = undefined,
		query: $$MediaQueryProps['query'] = undefined;
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
