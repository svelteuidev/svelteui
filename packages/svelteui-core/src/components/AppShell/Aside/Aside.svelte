<script lang="ts">
	import { HorizontalSection } from '../HorizontalSection';
	import type { HorizontalSectionSharedProps } from '../HorizontalSection/HorizontalSection.styles';

	export let use: HorizontalSectionSharedProps['use'] = [],
		element: HorizontalSectionSharedProps['element'] = undefined,
		className: HorizontalSectionSharedProps['className'] = '',
		override: HorizontalSectionSharedProps['override'] = {},
		width: HorizontalSectionSharedProps['width'] = undefined,
		height: HorizontalSectionSharedProps['height'] = undefined,
		fixed: HorizontalSectionSharedProps['fixed'] = false,
		position: HorizontalSectionSharedProps['position'] = { top: 0, right: 0 },
		hiddenBreakpoint: HorizontalSectionSharedProps['hiddenBreakpoint'] = 'md',
		hidden: HorizontalSectionSharedProps['hidden'] = false,
		zIndex: HorizontalSectionSharedProps['zIndex'] = 100;
	export { className as class };
</script>

<HorizontalSection
	section="aside"
	bind:element
	class={className}
	{use}
	{override}
	{width}
	{height}
	{fixed}
	{position}
	{hiddenBreakpoint}
	{hidden}
	{zIndex}
	{...$$restProps}
>
	<slot />
</HorizontalSection>
