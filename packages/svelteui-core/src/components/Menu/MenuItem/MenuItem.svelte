<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot making the component unusable -->
<script lang="ts">
	import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import type { Writable } from 'svelte/store';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { Box } from '../../Box';
	import IconRenderer from '../../IconRenderer/IconRenderer.svelte';
	import { ctx } from '../Menu.svelte';
	import type { MenuContextValue } from '../Menu.context';
	import useStyles, { getContextItemIndex } from './MenuItem.styles';
	import type { MenuItemProps as $$MenuItemProps } from './MenuItem';

	interface $$Props extends $$MenuItemProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		root: $$Props['root'] = 'button',
		color: $$Props['color'] = undefined,
		disabled: $$Props['disabled'] = false,
		icon: $$Props['icon'] = undefined,
		iconSize: $$Props['iconSize'] = undefined,
		iconProps: $$Props['iconProps'] = undefined;
	export { className as class };

	const state: Writable<MenuContextValue> = getContext(ctx);
	const forwardEvents = createEventForwarder(get_current_component());
	const castKeyboardEvent = <T = KeyboardEvent>(event): T => event;

	$: itemIndex = getContextItemIndex(
		{ elementSelector: '.svelteui-MenuItem-root', parentClassName: 'svelteui-Menu-body' },
		element
	);
	$: ({ cx, classes } = useStyles({ color, radius }, { override, name: 'MenuItem' }));
	$: ({ hovered, radius, onItemClick, onItemHover, onItemKeyDown } = $state);
</script>

<Box
	{root}
	use={[forwardEvents, [useActions, use]]}
	bind:element
	type="button"
	role="menuitem"
	class={cx(className, classes.root, {
		itemHovered: hovered === itemIndex
	})}
	{disabled}
	on:mouseenter={() => !disabled && onItemHover(itemIndex)}
	on:mouseleave={() => onItemHover(-1)}
	on:keydown={(event) => onItemKeyDown(castKeyboardEvent(event))}
	on:click={onItemClick}
	{...$$restProps}
>
	<div class={classes.itemInner}>
		<slot name="icon">
			{#if icon}
				<IconRenderer {icon} className={classes.itemIcon} {iconSize} {iconProps} />
			{/if}
		</slot>
		<div class={classes.itemBody}>
			<div class={classes.itemLabel}>
				<slot />
			</div>
			<slot name="rightSection" />
		</div>
	</div>
</Box>
