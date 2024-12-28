<script lang="ts">
	import { io } from '@svelteuidev/composables';
	import { Box } from '../Box';
	import type { ObserverRenderProps } from './ObserverRender';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		options = {},
		children,
		...rest
	}: ObserverRenderProps = $props();

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
	onchange={(event) => {
		const {
			inView,
			entry: _entry,
			scrollDirection: _scrollDirection,
			observer: _observer,
			node: _node
			// @ts-ignore
		} = event.detail;
		visible = inView;
		entry = _entry;
		scrollDirection = _scrollDirection;
		observer = _observer;
		node = _node;
	}}
	onenter={(event) => {
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
	onleave={(event) => {
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
	{@render children?.({ visible, entry, scrollDirection, observer, node })}
</Box>
