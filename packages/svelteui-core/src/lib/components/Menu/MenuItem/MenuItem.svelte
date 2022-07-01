<script lang="ts">
	import useStyles, { getContextItemIndex } from './MenuItem.styles';
	import { Box } from '../../Box';
	import { getContext } from 'svelte';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { Writable } from 'svelte/store';
	import type { MenuContextValue } from '../Menu.context';
	import type { MenuItemProps as $$MenuItemProps } from './MenuItem.styles';

	export let use: $$MenuItemProps['use'] = [],
		element: $$MenuItemProps['element'] = undefined,
		className: $$MenuItemProps['className'] = '',
		override: $$MenuItemProps['override'] = {},
		root: $$MenuItemProps['root'] = 'button',
		color: $$MenuItemProps['color'] = undefined,
		disabled: $$MenuItemProps['disabled'] = false,
		icon: $$MenuItemProps['icon'] = undefined,
		rightSection: $$MenuItemProps['rightSection'] = undefined,
		iconProps: $$MenuItemProps['iconProps'] = undefined,
		rightSectionProps: $$MenuItemProps['rightSectionProps'] = undefined;
	export { className as class };

	const state: Writable<MenuContextValue> = getContext('Menu');
	const forwardEvents = createEventForwarder(get_current_component());
	const { hovered, radius, onItemClick, onItemHover, onItemKeyDown } = $state;
	const castKeyboardEvent = <T = KeyboardEvent>(event): T => event;

	$: itemIndex = getContextItemIndex(
		{ elementSelector: '.svelteui-Menu-item', parentClassName: 'svelteui-Menu-body' },
		element
	);
	console.log({ hovered, itemIndex });
	$: ({ cx, classes } = useStyles({ color, radius }, { override }));
</script>

<Box
	{root}
	use={[forwardEvents, [useActions, use]]}
	bind:element
	type="button"
	role="menuitem"
	class={cx('svelteui-Menu-item', 'item', className, classes.root, {
		itemHovered: hovered === itemIndex
	})}
	{disabled}
	on:mouseenter={() => !disabled && onItemHover(itemIndex)}
	on:mouseleave={() => onItemHover((hovered) => (hovered = -1))}
	on:keydown={(event) => onItemKeyDown(castKeyboardEvent(event))}
	on:click={onItemClick}
	{...$$restProps}
>
	<div class={classes.itemInner}>
		{#if icon}
			<svelte:component this={icon} class={classes.itemIcon} {...iconProps} />
		{/if}
		<div class={classes.itemBody}>
			<div class={classes.itemLabel}>
				<slot />
			</div>
			{#if rightSection}
				<svelte:component this={rightSection} {...rightSectionProps} />
			{/if}
		</div>
	</div>
</Box>
