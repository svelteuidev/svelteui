<script lang="ts">
	import { io } from '@svelteuidev/actions';
	import { Box } from '../Box';
	import type { ObserverRenderProps as $$ObserverRenderProps } from './ObserverRender.styles';

	export let use: $$ObserverRenderProps['use'] = [],
		element: $$ObserverRenderProps['element'] = undefined,
		className: $$ObserverRenderProps['className'] = '',
		override: $$ObserverRenderProps['override'] = {},
		options: $$ObserverRenderProps['options'] = {};
	export { className as class };

	let visible = null;
	let entry = null;
	let scrollDirection = null;
	let observer = null;
	let node = null;
</script>

<Box
	bind:element
	use={[[io, options], ...use]}
	class={className}
	css={{ ...override }}
	{...$$restProps}
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
	<slot {visible} {entry} {scrollDirection} {observer} {node} />
</Box>
