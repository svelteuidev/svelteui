<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { Box } from '../../Box';
	import IconRenderer from '../../IconRenderer/IconRenderer.svelte';
	import { ctx } from '../Tabs.svelte';
	import type { TabsContext } from '../Tabs';
	import useStyles from './Tab.styles';
	import type { TabProps as $$TabProps } from './Tab';

	interface $$Props extends $$TabProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		active: $$Props['active'] = undefined,
		icon: $$Props['icon'] = undefined,
		iconProps: $$Props['iconProps'] = undefined,
		label: $$Props['label'] = undefined,
		color: $$Props['color'] = undefined,
		variant: $$Props['variant'] = undefined,
		orientation: $$Props['orientation'] = undefined,
		tabKey: $$Props['tabKey'] = undefined;
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
		<slot name="icon" {color} {...iconProps}>
			{#if icon}
				<IconRenderer {icon} {iconProps} className={classes.icon} />
			{/if}
		</slot>
		<slot name="label">
			{#if label}
				<div class={classes.label}>{label}</div>
			{/if}
		</slot>
		<div class={cx('svelteui-tab-content', classes.tabContent)}>
			<slot />
		</div>
	</div>
</Box>
