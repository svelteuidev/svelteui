<script lang="ts">
	import { HorizontalSection } from '../HorizontalSection';
	import type { HorizontalSectionSharedProps } from '../HorizontalSection/HorizontalSection';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		width = undefined,
		height = undefined,
		fixed = true,
		position = { top: 0, left: 0 },
		hiddenBreakpoint = 'md',
		hidden = false,
		zIndex = 100,
		children,
		...rest
	}: HorizontalSectionSharedProps = $props();
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
	{...rest}
>
	{@render children?.()}
</HorizontalSection>
