<script lang="ts">
	import { HorizontalSection } from '../HorizontalSection';
	import type { HorizontalSectionSharedProps as $$HorizontalSectionSharedProps } from '../HorizontalSection/HorizontalSection';

	interface $$Props extends $$HorizontalSectionSharedProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		width: $$Props['width'] = undefined,
		height: $$Props['height'] = undefined,
		fixed: $$Props['fixed'] = false,
		position: $$Props['position'] = { top: 0, left: 0 },
		hiddenBreakpoint: $$Props['hiddenBreakpoint'] = 'md',
		hidden: $$Props['hidden'] = false,
		zIndex: $$Props['zIndex'] = 100;
	export { className as class };
</script>

<HorizontalSection
	section="navbar"
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
