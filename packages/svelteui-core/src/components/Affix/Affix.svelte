<script lang="ts">
	import { Box } from '../Box';
	import { Portal } from '../Portal';
	import type { AffixProps } from './Affix';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		target = 'body',
		position = { bottom: 0, right: 0 },
		zIndex = 200,
		children,
		...rest
	}: AffixProps = $props();
</script>

<Portal {zIndex} {target}>
	<Box
		bind:element
		class={className}
		css={{ position: 'fixed', ...position, ...override }}
		{use}
		{...rest}
	>
		{@render children()}
	</Box>
</Portal>
