<script lang="ts">
	import useStyles from './MenuItem.styles';
	import { Box } from '../../Box';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { MenuItemProps as $$MenuItemProps } from './MenuItem.styles';

	export let use: $$MenuItemProps['use'] = [],
		element: $$MenuItemProps['element'] = undefined,
		className: $$MenuItemProps['className'] = '',
		override: $$MenuItemProps['override'] = {},
		root: $$MenuItemProps['root'] = 'button',
		color: $$MenuItemProps['color'] = undefined,
		disabled: $$MenuItemProps['disabled'] = undefined;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	let radius;
	let hovered;
	let itemIndex;
	let onItemHover;
	let onItemKeyDown;

	$: ({ cx, classes, getStyles } = useStyles({ color, radius }));
</script>

<Box
	{root}
	use={[forwardEvents, [useActions, use]]}
	bind:element
	type="button"
	role="menuitem"
	class={cx(
		getStyles({ css: override }),
		'item',
		{ [classes.itemHovered]: hovered === itemIndex },
		className
	)}
	{disabled}
	on:mouseenter={() => !disabled && onItemHover(itemIndex)}
	on:mouseleave={() => onItemHover(-1)}
	on:keydown={onItemKeyDown}
	{...$$restProps}
>
	<div class={classes.itemInner}>
		{#if $$slots.icon}
			<div class={classes.itemIcon}>
				<slot name="icon" />
			</div>
		{/if}

		<div class={classes.itemBody}>
			<div class={classes.itemLabel}>
				<slot />
			</div>
			{#if $$slots.rightSection}
				<slot name="rightSection" />
			{/if}
		</div>
	</div>
</Box>
