<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot making the component unusable -->
<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	import { useActions } from '$lib/internal';
	import { Box } from '../../Box';
	import IconRenderer from '../../IconRenderer/IconRenderer.svelte';
	import { ctx } from '../Menu.svelte';
	import type { MenuContextValue } from '../Menu.context';
	import useStyles, { getContextItemIndex } from './MenuItem.styles';
	import type { MenuItemProps } from './MenuItem';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		root = 'button',
		color = undefined,
		disabled = false,
		icon = undefined,
		iconComponent = undefined,
		iconSize = undefined,
		iconProps = undefined,
		children,
		rightSection,
		...rest
	}: MenuItemProps = $props();

	const state: Writable<MenuContextValue> = getContext(ctx);
	const { hovered, radius, onItemClick, onItemHover, onItemKeyDown } = $state;

	const castKeyboardEvent = <T = KeyboardEvent,>(event): T => event;

	const itemIndex = $derived(
		getContextItemIndex(
			{ elementSelector: '.svelteui-MenuItem-root', parentClassName: 'svelteui-Menu-body' },
			element
		)
	);
	let { cx, classes } = $derived(useStyles({ color, radius }, { override, name: 'MenuItem' }));
</script>

<Box
	{root}
	use={[[useActions, use]]}
	bind:element
	type="button"
	role="menuitem"
	class={cx(className, classes.root, {
		itemHovered: hovered === itemIndex
	})}
	{disabled}
	onmouseenter={() => !disabled && onItemHover(itemIndex)}
	onmouseleave={() => onItemHover(-1)}
	onkeydown={(event) => onItemKeyDown(castKeyboardEvent(event))}
	onclick={onItemClick}
	{...rest}
>
	<div class={classes.itemInner}>
		{@render icon?.()}
		{#if icon}
			<IconRenderer icon={iconComponent} className={classes.itemIcon} {iconSize} {iconProps} />
		{/if}
		<div class={classes.itemBody}>
			<div class={classes.itemLabel}>
				{@render children()}
			</div>
			{@render rightSection?.()}
		</div>
	</div>
</Box>
