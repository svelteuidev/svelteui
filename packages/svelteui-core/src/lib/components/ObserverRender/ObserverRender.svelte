<script lang="ts">
	import { io } from '@svelteuidev/actions';
	import { Box } from '../Box';
	import type { ObserverRenderProps as $$ObserverRenderProps } from './ObserverRender.styles';

	/** Used for forwarding actions from component */
	export let use: $$ObserverRenderProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$ObserverRenderProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$ObserverRenderProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$ObserverRenderProps['override'] = {};
	/** the options to pass to the renderer */
	export let options: $$ObserverRenderProps['options'] = {};

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
	}}
>
	>
	<slot {visible} {entry} {scrollDirection} {observer} {node} />
</Box>
