<script lang="ts">
	import { getContext, onMount } from 'svelte';

	import { Box } from '../../Box';
	import IconRenderer from '../../IconRenderer/IconRenderer.svelte';
	import { ctx } from '../Tabs.svelte';
	import type { TabsContext } from '../Tabs';
	import useStyles from './Tab.styles';
	import type { TabProps } from './Tab';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		active = undefined,
		iconComponent = undefined,
		iconProps = undefined,
		labelText = undefined,
		color = undefined,
		variant = undefined,
		orientation = undefined,
		tabKey = undefined,
		disabled = false,
		title = undefined,
		label,
		icon,
		children,
		...rest
	}: TabProps = $props();

	let _active = $state(active);
	let _color = $state(color !== undefined ? color : undefined);
	let _orientation = $state(orientation !== undefined ? orientation : undefined);
	let _variant = $state(variant !== undefined ? variant : undefined);

	const context: TabsContext = $derived.by(getContext(ctx));

	function calculateActive(currentContext: TabsContext) {
		if (!element) return;
		const children = element.parentNode.children;
		const tabsId = element.parentElement.getAttribute('data-tabsid');
		const index = Array.prototype.indexOf.call(children, element);

		_active = active !== undefined ? active : currentContext[tabsId].active === index;
		_color = color !== undefined ? color : currentContext[tabsId].color;
		_orientation = orientation !== undefined ? orientation : currentContext[tabsId].orientation;
		_variant = variant !== undefined ? variant : currentContext[tabsId].variant;
	}

	onMount(() => calculateActive(context));

	$effect.pre(() => calculateActive(context));

	let { cx, classes } = $derived(
		useStyles({ color: _color, orientation: _orientation }, { override, name: 'Tab' })
	);
</script>

<Box
	bind:element
	{use}
	class={cx('svelteui-Tab', className, classes.root, {
		active: _active,
		[_variant]: true
	})}
	root="button"
	role="tab"
	aria-selected={_active}
	data-key={tabKey}
	{disabled}
	{title}
	{...rest}
>
	<div class={classes.inner}>
		{#if icon}
			{@render icon()}
		{/if}
		{#if iconComponent}
			<IconRenderer className={classes.icon} icon={iconComponent} {iconProps} />
		{/if}
		{#if labelText}
			<div class={classes.label}>{labelText}</div>
		{:else if label}
			{@render label()}
		{/if}
		<div class={cx('svelteui-Tab-content', classes.tabContent, { active: _active })}>
			{@render children?.()}
		</div>
	</div>
</Box>
