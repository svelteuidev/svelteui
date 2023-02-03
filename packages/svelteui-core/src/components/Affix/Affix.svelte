<script lang="ts">
	import { Box } from '../Box';
	import { Portal } from '../Portal';
	import type { AffixProps as $$AffixProps } from './Affix';

	interface $$Props extends $$AffixProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		target: $$Props['target'] = 'body',
		position: $$Props['position'] = { bottom: 0, right: 0 },
		zIndex: $$Props['zIndex'] = 200;
	export { className as class };
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
