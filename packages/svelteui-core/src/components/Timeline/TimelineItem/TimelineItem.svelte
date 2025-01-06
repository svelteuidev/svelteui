<script lang="ts">
	import { getContext, onMount } from 'svelte';

	import { Box } from '../../Box';
	import IconRenderer from '../../IconRenderer/IconRenderer.svelte';
	import Text from '../../Text/Text.svelte';
	import { ctx } from '../Timeline.svelte';
	import type { TimelineContext } from '../Timeline';
	import useStyles from './TimelineItem.styles';
	import type { TimelineItemProps } from './TimelineItem';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		active = undefined,
		align = undefined,
		bulletComponent = undefined,
		bulletSize = undefined,
		radius = undefined,
		color = undefined,
		lineActive = undefined,
		lineVariant = 'solid',
		lineWidth = undefined,
		title = undefined,
		bullet,
		children,
		...rest
	}: TimelineItemProps = $props();

	// retrieves the reactive context so that TimelineItem has access
	// to the Timeline parameters
	const context: TimelineContext = $derived.by(getContext(ctx));

	let _active = $state(active);
	let _lineActive = $state(lineActive);
	let _align = $derived(align !== undefined ? align : context.align);
	let _color = $derived(color !== undefined ? color : context.color);
	let _radius = $derived(radius !== undefined ? radius : context.radius);
	let _bulletSize = $derived(bulletSize !== undefined ? bulletSize : context.bulletSize);
	let _lineWidth = $derived(lineWidth !== undefined ? lineWidth : context.lineWidth);

	function calculateActive(currentActive: number, reverseActive: boolean) {
		if (!element) return;
		const children = element.parentNode.children;
		const index = Array.prototype.indexOf.call(children, element);
		_active =
			active !== undefined
				? active
				: reverseActive
					? currentActive >= children.length - index - 1
					: currentActive >= index;
		_lineActive =
			lineActive !== undefined
				? lineActive
				: reverseActive
					? currentActive >= children.length - index - 1
					: currentActive - 1 >= index;
	}

	onMount(() => calculateActive(context.active, context.reverseActive));

	// check if item is still checked when the context store updates
	$effect.pre(() => calculateActive(context.active, context.reverseActive));

	let { cx, classes } = $derived(
		useStyles(
			{
				align: _align,
				bulletSize: _bulletSize,
				radius: _radius,
				color: _color,
				lineVariant,
				lineWidth: _lineWidth
			},
			{ override, name: 'TimelineItem' }
		)
	);
</script>

<Box
	bind:element
	{use}
	class={cx(className, classes.root, {
		lineActive: _lineActive,
		active: _active
	})}
	{...rest}
>
	<div class={cx(classes.bulletContainer, bullet && classes.bulletContainerWithChild)}>
		{#if bullet}
			{@render bullet()}
		{/if}
		{#if bulletComponent}
			<IconRenderer
				icon={bulletComponent}
				className={classes.bullet}
				iconSize={bulletSize}
				{color}
			/>
		{/if}
	</div>
	<div class={classes.container}>
		{#if title}
			<Text class={classes.title}>{title}</Text>
		{/if}
		<div class={classes.content}>
			{@render children?.()}
		</div>
	</div>
</Box>
