<script lang="ts">
	import { HorizontalSection } from '../HorizontalSection';
	import type { HorizontalSectionSharedProps as $$HorizontalSectionSharedProps } from '../HorizontalSection/HorizontalSection';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		width?: $$Props['width'];
		height?: $$Props['height'];
		fixed?: $$Props['fixed'];
		position?: $$Props['position'];
		hiddenBreakpoint?: $$Props['hiddenBreakpoint'];
		hidden?: $$Props['hidden'];
		zIndex?: $$Props['zIndex'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
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
	}: Props = $props();
	
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
