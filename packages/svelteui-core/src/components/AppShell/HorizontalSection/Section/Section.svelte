<script lang="ts">
	import { Box } from '../../../Box';
	import type { SectionProps } from './Section.styles';

	let {
		use = [],
		element = $bindable(null),
		className = '',
		override = {},
		grow = false,
		children,
		...rest
	}: SectionProps = $props();
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
