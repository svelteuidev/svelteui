<script lang="ts">
	import { io } from '@svelteuidev/composables';
	import { Box } from '../Box';
	import type { ObserverRenderProps as $$ObserverRenderProps } from './ObserverRender';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		options?: $$Props['options'];
		children?: import('svelte').Snippet<[any]>;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		options = {},
		children,
		...rest
	}: Props = $props();
	

	let visible: boolean = $state(null);
	let entry: IntersectionObserverEntry = $state(null);
	let scrollDirection = $state(null);
	let observer = $state(null);
	let node = $state(null);
</script>

<Box
	bind:element
	use={[[io, options], ...use]}
	class={className}
	css={{ ...override }}
	{...rest}
	on:change={(event) => {
		const {
			inView,
			entry: _entry,
			scrollDirection: _scrollDirection,
			observer: _observer,
			node: _node
		} = event.detail;
		visible = inView;
		entry = _entry;
		scrollDirection = _scrollDirection;
		observer = _observer;
		node = _node;
	}}
	on:enter={(event) => {
		const {
			inView,
			entry: _entry,
			scrollDirection: _scrollDirection,
			observer: _observer,
			node: _node
		} = event.detail;
		visible = inView;
		entry = _entry;
		scrollDirection = _scrollDirection;
		observer = _observer;
		node = _node;
	}}
	on:leave={(event) => {
		const {
			inView,
			entry: _entry,
			scrollDirection: _scrollDirection,
			observer: _observer,
			node: _node
		} = event.detail;
		visible = inView;
		entry = _entry;
		scrollDirection = _scrollDirection;
		observer = _observer;
		node = _node;
	}}
	on:init={(event) => {
		const { observer: _observer, node: _node } = event.detail;
		observer = _observer;
		node = _node;
	}}
>
	{@render children?.({ visible, entry, scrollDirection, observer, node, })}
</Box>
