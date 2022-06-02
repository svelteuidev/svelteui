<script lang="ts">
	import useStyles from './TypographyProvider.styles';
	import { Box } from '../Box';
	import type { TypographyProviderProps as $$TypographyProviderProps } from './TypographyProvider.styles';

	export let use: $$TypographyProviderProps['use'] = [],
		element: $$TypographyProviderProps['element'] = undefined,
		className: $$TypographyProviderProps['className'] = '',
		override: $$TypographyProviderProps['override'] = {},
		primaryColor: $$TypographyProviderProps['primaryColor'] = 'blue',
		underline: $$TypographyProviderProps['underline'] = true;
	export { className as class };

	$: ({ cx, getStyles } = useStyles({ primaryColor, underline }));
</script>

<Box bind:element class={cx(className, getStyles({ css: override }))} {use} {...$$restProps}>
	<slot />
</Box>
