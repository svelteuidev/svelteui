<script lang="ts">
	import { Box } from '../../../Box';
	import type { SectionProps as $$SectionProps } from './Section.styles';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		className?: $$Props['className'];
		override?: $$Props['override'];
		grow?: $$Props['grow'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		className = '',
		override = {},
		grow = false,
		children,
		...rest
	}: Props = $props();
</script>

<Box
	bind:element
	class={className}
	css={{ flex: grow ? 1 : 0, boxSizing: 'border-box', ...override }}
	{use}
	{...rest}
>
	{@render children?.()}
</Box>
