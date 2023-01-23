<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import Box from '../../Box/Box.svelte';
	import IconRenderer from '../../IconRenderer/IconRenderer.svelte';
	import Text from '../../Text/Text.svelte';
	import { ctx } from '../Timeline.svelte';
	import type { TimelineContext } from '../Timeline';
	import useStyles from './TimelineItem.styles';
	import type { TimelineItemProps as $$TimelineItemProps } from './TimelineItem';

	export let use: $$TimelineItemProps['use'] = [],
		element: $$TimelineItemProps['element'] = undefined,
		className: $$TimelineItemProps['className'] = '',
		override: $$TimelineItemProps['override'] = {},
		active: $$TimelineItemProps['active'] = undefined,
		align: $$TimelineItemProps['align'] = undefined,
		bullet: $$TimelineItemProps['bullet'] = undefined,
		bulletSize: $$TimelineItemProps['bulletSize'] = undefined,
		radius: $$TimelineItemProps['radius'] = undefined,
		color: $$TimelineItemProps['color'] = undefined,
		lineActive: $$TimelineItemProps['lineActive'] = undefined,
		lineVariant: $$TimelineItemProps['lineVariant'] = 'solid',
		lineWidth: $$TimelineItemProps['lineWidth'] = undefined,
		title: $$TimelineItemProps['title'] = undefined;
	export { className as class };

	// retrieves the reactive context so that TimelineItem has access
	// to the Timeline parameters
	const state: TimelineContext = getContext(ctx);

	function calculateActive() {
		if (!element) return;
		const children = element.parentNode.children;
		const index = Array.prototype.indexOf.call(children, element);
		_active =
			active !== undefined
				? active
				: $state.reverseActive
				? $state.active >= children.length - index - 1
				: $state.active >= index;
		_lineActive =
			lineActive !== undefined
				? lineActive
				: $state.reverseActive
				? $state.active >= children.length - index - 1
				: $state.active - 1 >= index;
	}

	onMount(() => calculateActive());

	$: _active = active;
	$: _lineActive = lineActive;
	$: _align = align !== undefined ? align : $state.align;
	$: _color = color !== undefined ? color : $state.color;
	$: _radius = radius !== undefined ? radius : $state.radius;
	$: _bulletSize = bulletSize !== undefined ? bulletSize : $state.bulletSize;
	$: _lineWidth = lineWidth !== undefined ? lineWidth : $state.lineWidth;

	// check if item is still checked when the context store updates
	$: $state, calculateActive();

	$: ({ cx, classes } = useStyles(
		{
			align: _align,
			bulletSize: _bulletSize,
			radius: _radius,
			color: _color,
			lineVariant,
			lineWidth: _lineWidth
		},
		{ override, name: "TimelineItem" }
	));
</script>

<Box
	bind:element
	{use}
	class={cx(className, classes.root,  {
    lineActive: _lineActive,
		active: _active
	})}
	{...$$restProps}
>
	<div class={cx(classes.bulletContainer, bullet && classes.bulletContainerWithChild)}>
		<slot name="bullet">
			{#if bullet}
				<IconRenderer icon={bullet} className={classes.bullet} iconSize={bulletSize} {color} />
			{/if}
		</slot>
	</div>
	<div class={classes.container}>
		{#if title}
			<Text class={classes.title}>{title}</Text>
		{/if}
		<div class={classes.content}>
			<slot />
		</div>
	</div>
</Box>
