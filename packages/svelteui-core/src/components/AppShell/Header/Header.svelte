<script lang="ts">
	import { VerticalSection } from '../VerticalSection';
	import type { VerticalSectionSharedProps as $$VerticalSectionSharedProps } from '../VerticalSection/VerticalSection.styles';

	interface $$Props extends $$VerticalSectionSharedProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		height: $$Props['height'] = undefined,
		fixed: $$Props['fixed'] = false,
		position: $$Props['position'] = { top: 0, left: 0, right: 0 },
		zIndex: $$Props['zIndex'] = 100;
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
