<script lang="ts">
	import useStyles from './Tab.styles';
	import { ctx } from '../Tabs.svelte';
	import { Box } from '../../Box';
	import { getContext, onMount } from 'svelte';
	import type { TabsContext } from '../Tabs.styles';
	import type { TabProps as $$TabProps } from './Tab.styles';

	export let use: $$TabProps['use'] = [],
		element: $$TabProps['element'] = undefined,
		className: $$TabProps['className'] = '',
		override: $$TabProps['override'] = {},
		active: $$TabProps['active'] = undefined,
		icon: $$TabProps['icon'] = undefined,
		label: $$TabProps['label'] = undefined,
		color: $$TabProps['color'] = undefined,
		variant: $$TabProps['variant'] = undefined,
		orientation: $$TabProps['orientation'] = undefined,
		tabKey: $$TabProps['tabKey'] = undefined;
	export { className as class };

	// retrieves the reactive context so that Tab has access
	// to the Tabs parameters
	const state: TabsContext = getContext(ctx);

	function calculateActive() {
		if (!element) return;
		const children = element.parentNode.children;
		const index = Array.prototype.indexOf.call(children, element);
		_active = active !== undefined ? active : $state.active === index;
	}

	onMount(() => calculateActive());

	$: _active = active;
	$: _color = color !== undefined ? color : $state.color;
	$: _orientation = orientation !== undefined ? orientation : $state.orientation;
	$: _variant = variant !== undefined ? variant : $state.variant;

	// check if item is still checked when the context store updates
	$: $state, calculateActive();

	$: ({ cx, classes } = useStyles({ color: _color, orientation: _orientation }, { override }));
</script>

<Box
	bind:element
	{use}
	class={cx('svelteui-tab', className, classes.root, classes[_variant], {
		active: _active,
		[_variant]: true
	})}
	root="button"
	role="tab"
	aria-selected={_active}
	data-key={tabKey}
	{...$$restProps}
>
	<div class={classes.inner}>
		{#if icon}
			<svelte:component this={icon} class={classes.icon} />
		{/if}
		{#if label}
			<div class={classes.label}>{label}</div>
		{/if}
		<div class={cx('svelteui-tab-content', classes.tabContent)}>
			<slot />
		</div>
	</div>
</Box>
