<script lang="ts">
    import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import useStyles from './Tabs.styles';
	import Box from '../Box/Box.svelte';
	import Group from '../Group/Group.svelte';
	import type { TabsProps as $$TabsProps } from './Tabs.styles';

	export let use: $$TabsProps['use'] = [],
		element: $$TabsProps['element'] = undefined,
		className: $$TabsProps['className'] = '',
		override: $$TabsProps['override'] = {},
		active: $$TabsProps['active'] = -1,
		color: $$TabsProps['color'] = 'blue',
		grow: $$TabsProps['grow'] = false,
		initialTab: $$TabsProps['initialTab'] = 0,
		orientation: $$TabsProps['orientation'] = 'horizontal',
		position: $$TabsProps['position'] = 'left',
		tabPadding: $$TabsProps['tabPadding'] = 'xs',
		variant: $$TabsProps['variant'] = 'default';
	export { className as class };

    // initialize a 'reactive context' which is basically
	// a store inside the context, so that all children
	// components can react to changes made in props
	const contextStore = writable({
        active: active,
        color: color,
		variant: variant,
		orientation: orientation
    });
	setContext('tabs', contextStore);
	$: $contextStore = {
        active: active,
        color: color,
		variant: variant,
		orientation: orientation
    };

	// @TODO: find a way of getting this content from the active tab content
	$: content = "";

	$: ({ cx, classes } = useStyles({ orientation, tabPadding }, { override }));
</script>

<!--
@component
**UNSTABLE:** new API, yet to be vetted.

Display list of events in chronological order
	
@see https://svelteui.org/core/timeline
@example
    ```svelte
    <Tabs>
      <Tabs.Tab>
		...
	  </Tabs.Tab>
      <Tabs.Tab>
		...
	  </Tabs.Tab>
	  ...
    </Tabs>
    ```
-->
<Box
	bind:element
	{use}
	class={cx(className, classes.root)}
	{...$$restProps}
>
    <div class={cx(classes.wrapper, classes[variant])}>
        <Group
            class={classes.tabs}
            role="tablist"
            direction={orientation === 'horizontal' ? 'row' : 'column'}
            aria-orientation={orientation}
            spacing={variant === 'pills' ? 5 : 0}
            position={position}
            grow={grow}
        >
            <slot />
        </Group>
    </div>
    {#if content}
        <div role="tabpanel" class={classes.content}>
            {content}
        </div>
    {/if}
</Box>
