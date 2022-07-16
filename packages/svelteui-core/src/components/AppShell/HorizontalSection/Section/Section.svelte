<script lang="ts">
	import { Box } from '../../../Box';
	import type { SectionProps as $$SectionProps } from './Section.styles';

	export let use: $$SectionProps['use'] = [],
		element: $$SectionProps['element'] = undefined,
		className: $$SectionProps['className'] = '',
		override: $$SectionProps['override'] = {},
		grow: $$SectionProps['grow'] = false;
</script>

<Box
	bind:element
	class={className}
	css={{ flex: grow ? 1 : 0, boxSizing: 'border-box', ...override }}
	{use}
	{...$$restProps}
>
	<slot />
</Box>
