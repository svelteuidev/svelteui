<script lang="ts">
	import { Box } from '../Box';
	import { Portal } from '../Portal';
	import type { AffixProps as $$AffixProps } from './Affix';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		target?: $$Props['target'];
		position?: $$Props['position'];
		zIndex?: $$Props['zIndex'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

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
	}: Props = $props();
	
</script>

<Portal {zIndex} {target}>
	<Box
		bind:element
		class={className}
		css={{ position: 'fixed', ...position, ...override }}
		{use}
		{...rest}
	>
		{@render children?.()}
	</Box>
</Portal>
