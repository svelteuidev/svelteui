<script lang="ts">
	import useStyles from './Tab.styles';
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

	// retrieves the reactive context so that Col has access
	// to the Grid cols, grow and spacing parameters
	const state: TabsContext = getContext('tabs');

    function calculateActive() {
		if (!element) return;
		const children =  element.parentNode.children;
		const index = Array.prototype.indexOf.call(children, element);
		_active = active !== undefined ? active : $state.active >= index;
	}

	onMount(() => calculateActive());

    $: _active = active;
    $: _color = color !== undefined ? color : $state.color;

    // check if item is still checked when the context store updates
	$: $state, calculateActive();

	$: ({ cx, classes } = useStyles({}, { override }));
</script>

<Box bind:element {use} class={cx(className, classes.root)} {...$$restProps}>
    <div class={classes.inner}>
        {#if icon}
            <div class={classes.icon}>{icon}</div>
        {/if}
        {#if label}
            <div class={classes.label}>{label}</div>
        {/if}
    </div>
</Box>
