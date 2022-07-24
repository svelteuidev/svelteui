<script lang="ts">
	import { VerticalSection } from '../VerticalSection';
	import type { VerticalSectionSharedProps } from '../VerticalSection/VerticalSection.styles';

	export let use: VerticalSectionSharedProps['use'] = [],
		element: VerticalSectionSharedProps['element'] = undefined,
		className: VerticalSectionSharedProps['className'] = '',
		override: VerticalSectionSharedProps['override'] = {},
		height: VerticalSectionSharedProps['height'] = undefined,
		fixed: VerticalSectionSharedProps['fixed'] = false,
		position: VerticalSectionSharedProps['position'] = { top: 0, left: 0, right: 0 },
		zIndex: VerticalSectionSharedProps['zIndex'] = 100;
	export { className as class };
</script>

<VerticalSection
	bind:element
	section="header"
	class={className}
	{use}
	{override}
	{height}
	{fixed}
	{position}
	{zIndex}
	{...$$restProps}
>
	<slot />
</VerticalSection>
