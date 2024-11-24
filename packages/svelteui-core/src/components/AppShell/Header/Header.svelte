<script lang="ts">
	import { VerticalSection } from '../VerticalSection';
	import type { VerticalSectionSharedProps as $$VerticalSectionSharedProps } from '../VerticalSection/VerticalSection';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		height?: $$Props['height'];
		fixed?: $$Props['fixed'];
		position?: $$Props['position'];
		zIndex?: $$Props['zIndex'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		height = undefined,
		fixed = false,
		position = { top: 0, left: 0, right: 0 },
		zIndex = 100,
		children,
		...rest
	}: Props = $props();
	
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
