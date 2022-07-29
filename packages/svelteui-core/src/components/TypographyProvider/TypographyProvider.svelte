<script lang="ts">
	import useStyles from './TypographyProvider.styles';
	import { Box } from '../Box';
	import type { TypographyProviderProps as $$TypographyProviderProps } from './TypographyProvider.styles';

  interface $$Props extends $$TypographyProviderProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		primaryColor: $$Props['primaryColor'] = 'blue',
		underline: $$Props['underline'] = true;
	export { className as class };

	$: ({ cx, getStyles } = useStyles({ primaryColor, underline }));
</script>

<Box bind:element class={cx(className, getStyles({ css: override }))} {use} {...$$restProps}>
	<slot />
</Box>
