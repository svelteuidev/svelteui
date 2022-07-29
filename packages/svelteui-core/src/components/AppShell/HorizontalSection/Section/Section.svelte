<script lang="ts">
	import { Box } from '../../../Box';
	import type { SectionProps as $$SectionProps } from './Section.styles';

  interface $$Props extends $$SectionProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		grow: $$Props['grow'] = false;
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
