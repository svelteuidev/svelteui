<script lang="ts">
	import { VerticalSection } from '../VerticalSection';
	import type { VerticalSectionSharedProps } from '../VerticalSection/VerticalSection';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		height = undefined,
		fixed = false,
		position = { top: 0, left: 0, right: 0 },
		zIndex = 100,
		children,
		...rest
	}: VerticalSectionSharedProps = $props();
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
	{...rest}
>
	{@render children?.()}
</VerticalSection>
