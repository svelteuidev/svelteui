<script lang="ts">
	import { HorizontalSection } from '../HorizontalSection';
	import type { HorizontalSectionSharedProps } from '../HorizontalSection/HorizontalSection';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		width = undefined,
		height = undefined,
		fixed = false,
		position = { top: 0, right: 0 },
		hiddenBreakpoint = 'md',
		hidden = false,
		zIndex = 100,
		children,
		...rest
	}: HorizontalSectionSharedProps = $props();
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
	{...rest}
>
	{@render children?.()}
</HorizontalSection>
