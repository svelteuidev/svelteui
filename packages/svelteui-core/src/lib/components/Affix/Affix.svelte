<script lang="ts">
	import { Box } from '../Box';
	import { Portal } from '../Portal';
	import type { AffixProps as $$AffixProps } from './Affix.styles';

	export let use: $$AffixProps['use'] = [],
		element: $$AffixProps['element'] = undefined,
		className: $$AffixProps['className'] = '',
		override: $$AffixProps['override'] = {},
		target: $$AffixProps['target'] = 'body',
		position: $$AffixProps['position'] = { bottom: 0, right: 0 },
		zIndex: $$AffixProps['zIndex'] = 200;
</script>

<Portal {zIndex} {target}>
	<Box
		bind:element
		class={className}
		css={{ position: 'fixed', ...position, ...override }}
		{use}
		{...$$restProps}
	>
		<slot />
	</Box>
</Portal>
